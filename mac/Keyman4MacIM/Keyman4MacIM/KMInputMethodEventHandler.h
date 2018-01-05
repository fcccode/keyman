//
//  KMInputMethodEventHandler.h
//  Keyman4MacIM
//
//  Created by Tom Bogle on 11/22/17.
//  Copyright © 2017 SIL International. All rights reserved.
//

#import <Foundation/Foundation.h>

#ifndef KMInputMethodEventHandler_h
#define KMInputMethodEventHandler_h

@interface KMInputMethodEventHandler : NSObject

- (BOOL)handleEvent:(NSEvent *)event client:(id)sender;
- (void)deactivate;

@end

#endif /* KMInputMethodEventHandler_h */
