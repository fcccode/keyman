//
//  APIKeyboardRepository.swift
//  KeymanEngine
//
//  Created by Gabriel Wong on 2017-12-01.
//  Copyright © 2017 SIL International. All rights reserved.
//

import Foundation

public enum APIKeyboardFetchError: Error {
  case networkError(Error)
  case noData
  case parsingError(Error)
}

public class APIKeyboardRepository: KeyboardRepository {
  private let languagesAPIURL = URLComponents(string: "https://r.keymanweb.com/api/4.0/languages")!

  public weak var delegate: KeyboardRepositoryDelegate?
  public private(set) var languages: [String: Language]?
  public private(set) var keyboards: [String: Keyboard]?
  private(set) var options: Options?

  public func fetch(completionHandler: CompletionHandler?) {
    let deviceType = UIDevice.current.userInterfaceIdiom == .phone ? "iphone" : "ipad"
    var urlComponents = languagesAPIURL
    urlComponents.queryItems = [
      URLQueryItem(name: "dateformat", value: "seconds"),
      URLQueryItem(name: "device", value: deviceType)
    ]
    let task = URLSession.shared.dataTask(with: urlComponents.url!) { (data, response, error) in
      self.apiCompletionHandler(data: data, response: response, error: error,
                                fetchCompletionHandler: completionHandler)
    }
    task.resume()
  }

  private func apiCompletionHandler(data: Data?,
                                    response: URLResponse?,
                                    error: Error?,
                                    fetchCompletionHandler: ((Error?) -> Void)?) {
    if let error = error {
      Manager.shared.kmLog("Network error fetching languages: \(error)", checkDebugPrinting: false)
      fetchCompletionHandler?(error)
      delegate?.keyboardRepository(self, didFailFetch: APIKeyboardFetchError.networkError(error))
      return
    }
    guard let data = data else {
      Manager.shared.kmLog("Language API did not return data", checkDebugPrinting: false)
      fetchCompletionHandler?(error)
      delegate?.keyboardRepository(self, didFailFetch: APIKeyboardFetchError.noData)
      return
    }

    let decoder = JSONDecoder()
    decoder.dateDecodingStrategy = .secondsSince1970
    let result: LanguagesAPICall
    do {
      result = try decoder.decode(LanguagesAPICall.self, from: data)
    } catch {
      Manager.shared.kmLog("Failed parsing API languages: \(error)", checkDebugPrinting: false)
      fetchCompletionHandler?(error)
      delegate?.keyboardRepository(self, didFailFetch: APIKeyboardFetchError.parsingError(error))
      return
    }

    options = result.options
    languages = Dictionary(uniqueKeysWithValues: result.languages.map { ($0.id, $0) })

    let keyboardsWithID = result.languages.flatMap { language in
      language.keyboards?.map { kb in (kb.id, kb) } ?? []
    }
    keyboards = Dictionary(keyboardsWithID) { old, new in
      var kb = old
      if old.languages == nil {
        kb.languages = new.languages
        return kb
      }
      if let newLanguages = new.languages {
        let oldLanguageIDs = Set(old.languages!.map { $0.id })
        kb.languages!.append(contentsOf: newLanguages.filter { !oldLanguageIDs.contains($0.id) })
      }
      return kb
    }

    Manager.shared.kmLog("Request completed -- \(result.languages.count) languages.", checkDebugPrinting: true)
    fetchCompletionHandler?(nil)
    delegate?.keyboardRepositoryDidFetch(self)
  }
}