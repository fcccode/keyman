//
//  KMInputController.m
//  Keyman4MacIM
//
//  Created by Serkan Kurt on 29/01/2015.
//  Copyright (c) 2017 SIL International. All rights reserved.
//

#import "KMInputController.h"
#import "KMInputMethodEventHandler.h"
#import "KMInputMethodBrowserClientEventHandler.h"
#import "KMInputMethodSafariClientEventHandler.h"
#include <Carbon/Carbon.h> /* For kVK_ constants. */

@implementation KMInputController

KMInputMethodEventHandler* _eventHandler;

- (KMInputMethodAppDelegate *)AppDelegate {
    return (KMInputMethodAppDelegate *)[NSApp delegate];
}

- (id)initWithServer:(IMKServer *)server delegate:(id)delegate client:(id)inputClient
{
    self = [super initWithServer:server delegate:delegate client:inputClient];
    if (self) {
        self.AppDelegate.inputController = self;
        if (self.AppDelegate.kvk != nil && self.AppDelegate.alwaysShowOSK)
            [self.AppDelegate showOSK];
    }
    
    return self;
}

- (NSUInteger)recognizedEvents:(id)sender {
    return (NSKeyDownMask | NSLeftMouseDownMask | NSLeftMouseUpMask);
}

- (BOOL)handleEvent:(NSEvent *)event client:(id)sender {
    if ([self.AppDelegate debugMode])
        NSLog(@"Event = %@", event);
    
    if (event == nil || sender == nil || self.kmx == nil || _eventHandler == nil)
        return NO; // Not sure this can ever happen.
    
    return [_eventHandler handleEvent:event client:sender];
}

- (void)activateServer:(id)sender {
    [sender overrideKeyboardWithKeyboardNamed:@"com.apple.keylayout.US"];
    
    if (_eventHandler != nil) {
        [_eventHandler deactivate];
    }
    
    NSRunningApplication *currApp = [[NSWorkspace sharedWorkspace] frontmostApplication];
    NSString *clientAppId = [currApp bundleIdentifier];
    if ([self.AppDelegate debugMode])
        NSLog(@"New active app %@", clientAppId);
    
    // Most things in Safari work well using the normal way, but Google Docs doesn't.
    if ([clientAppId isEqual: @"com.apple.Safari"]) {
        _eventHandler = [[KMInputMethodSafariClientEventHandler alloc] init];
    }
    else if ([clientAppId isEqual: @"org.mozilla.firefox"] ||
        [clientAppId isEqual: @"com.google.Chrome"]) {
        _eventHandler = [[KMInputMethodBrowserClientEventHandler alloc] init];
    }
    else
        _eventHandler = [[KMInputMethodEventHandler alloc] initWithClient:clientAppId];
}

- (void)deactivateServer:(id)sender {
    if ([self.AppDelegate debugMode]) {
        NSLog(@"*** deactivateServer ***");
        NSLog(@"sender: %@", sender);
        NSLog(@"***");
    }
    // Seems like we ought to do this, but it appears there is a timing issue that
    // sometimes causes the deactivate to happen AFTER the new activateServer event,
    // thereby clobbering the newly created event handler.
//    if (_eventHandler != nil) {
//        [_eventHandler deactivate];
//        _eventHandler = nil;
//    }
}

/*
- (NSDictionary *)modes:(id)sender {
    if ([self.AppDelegate debugMode])
        NSLog(@"*** Modes ***");
    if (_kmModes == nil) {
        NSDictionary *amhMode = [[NSDictionary alloc] initWithObjectsAndKeys:@"keyman.png", kTSInputModeAlternateMenuIconFileKey,
                                 [NSNumber numberWithBool:YES], kTSInputModeDefaultStateKey,
                                 [NSNumber numberWithBool:YES], kTSInputModeIsVisibleKey,
                                 @"A", kTSInputModeKeyEquivalentKey,
                                 [NSNumber numberWithInteger:4608], kTSInputModeKeyEquivalentModifiersKey,
                                 [NSNumber numberWithBool:YES], kTSInputModeDefaultStateKey,
                                 @"keyman.png", kTSInputModeMenuIconFileKey,
                                 @"keyman.png", kTSInputModePaletteIconFileKey,
                                 [NSNumber numberWithBool:YES], kTSInputModePrimaryInScriptKey,
                                 @"smUnicodeScript", kTSInputModeScriptKey,
                                 @"amh", @"TISIntendedLanguage", nil];
        
        NSDictionary *hinMode = [[NSDictionary alloc] initWithObjectsAndKeys:@"keyman.png", kTSInputModeAlternateMenuIconFileKey,
                                 [NSNumber numberWithBool:YES], kTSInputModeDefaultStateKey,
                                 [NSNumber numberWithBool:YES], kTSInputModeIsVisibleKey,
                                 @"H", kTSInputModeKeyEquivalentKey,
                                 [NSNumber numberWithInteger:4608], kTSInputModeKeyEquivalentModifiersKey,
                                 [NSNumber numberWithBool:YES], kTSInputModeDefaultStateKey,
                                 @"keyman.png", kTSInputModeMenuIconFileKey,
                                 @"keyman.png", kTSInputModePaletteIconFileKey,
                                 [NSNumber numberWithBool:YES], kTSInputModePrimaryInScriptKey,
                                 @"smUnicodeScript", kTSInputModeScriptKey,
                                 @"hin", @"TISIntendedLanguage", nil];
        
        NSDictionary *modeList = [[NSDictionary alloc] initWithObjectsAndKeys:amhMode, @"com.apple.inputmethod.amh", hinMode, @"com.apple.inputmethod.hin", nil];
        NSArray *modeOrder = [[NSArray alloc] initWithObjects:@"com.apple.inputmethod.amh", @"com.apple.inputmethod.hin", nil];
        _kmModes = [[NSDictionary alloc] initWithObjectsAndKeys:modeList, kTSInputModeListKey,
                               modeOrder, kTSVisibleInputModeOrderedArrayKey, nil];
    }

    return _kmModes;
}
*/

- (NSMenu *)menu {
    return self.AppDelegate.menu;
}

- (KMXFile *)kmx {
    return self.AppDelegate.kmx;
}

- (void)menuAction:(id)sender {
    NSMenuItem *mItem = [sender objectForKey:kIMKCommandMenuItemName];
    NSInteger itag = mItem.tag;
    if (itag == 2) {
        [self showPreferences:sender];
    }
    else if (itag == 3) {
        [self.AppDelegate showOSK];
    }
    else if (itag == 4) {
        [self.AppDelegate showAboutWindow];
    }
    else if (itag >= 1000) {
        NSMenuItem *keyboards = [self.AppDelegate.menu itemWithTag:1];
        for (NSMenuItem *item in keyboards.submenu.itemArray) {
            if (item.tag == itag)
                [item setState:NSOnState];
            else
                [item setState:NSOffState];
        }
        
        NSString *path = [self.AppDelegate.activeKeyboards objectAtIndex:itag%1000];
        KMXFile *kmx = [[KMXFile alloc] initWithFilePath:path];
        [self.AppDelegate setKmx:kmx];
        KVKFile *kvk = nil;
        NSDictionary *kmxInfo = [KMXFile infoDictionaryFromFilePath:path];
        NSString *kvkFilename = [kmxInfo objectForKey:kKMVisualKeyboardKey];
        if (kvkFilename != nil) {
            NSString *kvkFilePath = [self.AppDelegate kvkFilePathFromFilename:kvkFilename];
            if (kvkFilePath != nil)
                kvk = [[KVKFile alloc] initWithFilePath:kvkFilePath];
        }
        [self.AppDelegate setKvk:kvk];
        [self.AppDelegate setKeyboardName:[kmxInfo objectForKey:kKMKeyboardNameKey]];
        [self.AppDelegate setKeyboardIcon:[kmxInfo objectForKey:kKMKeyboardIconKey]];
        [self.AppDelegate setContextBuffer:nil];
        [self.AppDelegate setSelectedKeyboard:path];
        if (kvk != nil && self.AppDelegate.alwaysShowOSK)
            [self.AppDelegate showOSK];
    }
}
@end
