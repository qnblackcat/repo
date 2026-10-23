An attempt to bring the Tapbacks feature from iOS 18+ down to iOS 15 / 16 / 17.

## Features
- A round smiley button beside the six classic tapbacks opens the emoji keyboard; the picked emoji is sent as a tapback.
- You can even drop any emoji into the message of someone using iOS 18+ who is not jailbroken 👀
- Emoji from others show up in the Tapback bubble, including from iOS 18+ non jailbroken devices.
- Between devices that all have Tapbacks18, the emoji lands on the exact message, photos and files included.
- Compatible with EmojiPort.
- Experimental “Native emoji tapbacks”

## Known limitations
- **Notifications say "loved …"** for an emoji tapback. They are built from the classic tapback type
  (`IMTapback previewString…`), which only sees the heart. Not fixed. (The conversation-list preview shows the emoji text.)
- Sticker tapbacks from iOS 18 (`amt` 2007/3007) become a plain-text message ("Reacted with a sticker").
- If the tweak is not loaded (e.g. reboot into jailed mode), emoji tapbacks show as hearts.
- iOS 16/17 devices without the tweak may not display `amt` 2006 at all.
- The pinned-conversation tapback bubble (`CKPinnedConversationTapbackBubble`) does not show emoji.
- Group circles: classic tapbacks in the extra circles are drawn with SF Symbols (not ChatKit's own glyphs); at most 4
  circles are shown; long-press on an extra circle and sent-message platters (circles to the right) are not fully tested.
