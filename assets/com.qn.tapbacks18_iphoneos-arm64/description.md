Bring the Tapbacks feature from iOS 18+ down to iOS 15 / 16 / 17, plus a few privacy switches for Messages.

## Features
- A round smiley button beside the six classic tapbacks opens the emoji keyboard; the picked emoji is sent as a tapback.
- You can even drop any emoji into the message of someone using iOS 18+ who is not jailbroken 👀
- Emoji from others show up in the Tapback bubble, including from iOS 18+ non jailbroken devices.
- Between devices that all have Tapbacks18, the emoji lands on the exact message, photos and files included.
- Compatible with EmojiPort.
- Experimental “Native emoji tapbacks”.
- Privacy switches (see below): Hide Read, Hide Delivered, Hide Typing, Keep Unsent messages, each for all chats or for one conversation.

## Privacy
- **Hide Read status**: you still see other people's Read
- **Hide Delivered status**: the delivery receipts of this device are not sent. It only works on devices with Tapbacks18:
  the sender still sees Delivered when any other Apple device of yours (Mac, iPad) receives the message.
- **Hide Typing indicator**
- **Keep Unsent messages**: when the sender unsends a message (iOS 16+), the message stays. Edits still go through. The kept
  message is tagged "↩︎ Unsent Prevented ✋" next to the bubble in Messages.
- **Per conversation**: open a chat in Messages, tap the Avatar → **Tapbacks18 Privacy**. Settings here override the general settings in Settings → Tapbacks18 → Privacy.

## Known limitations
- Hide Delivered cannot hide the "Delivered" that other Apple devices of yours send. 
- Sticker tapbacks from iOS 18 is still received as a plain-text message.
- If the tweak is not loaded (e.g. reboot into jailed mode), emoji tapbacks show as hearts.
- iOS 16/17 devices without the tweak may not display emoji correctly.
- The pinned-conversation tapback bubble (`CKPinnedConversationTapbackBubble`) does not show emoji.
- Group circles: classic tapbacks in the extra circles are drawn with SF Symbols (not ChatKit's own glyphs); at most 4
  circles are shown; long-press on an extra circle and sent-message platters (circles to the right) are not fully tested.
