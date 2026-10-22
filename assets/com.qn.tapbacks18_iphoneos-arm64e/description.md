* An attempt to bring the Tapbacks feature from iOS 18+ down to iOS 16 / 17.

## Features
- A round "+" button beside the six classic tapbacks opens the emoji keyboard; the picked emoji is sent as a tapback.
- If your own tapback is an emoji, the "+" button shows it (blue); tap it to change it, or tap the ✕ badge to remove it.
  This also works when you open the picker by tapping an existing tapback on a message.
- Emoji tapbacks from other people are drawn in the tapback platter.
- Between devices that all run Tapbacks18, emoji land on the exact message, including photos and files.
- iOS 18+ devices without the tweak: their emoji tapbacks arrive as plain text ("Reacted 🔥 to “…”", 45 languages) and
  are turned back into tapbacks. Text messages match by content; photos/files by "newest message with an attachment" unless
  the native setting is on (see below).

### Native emoji tapbacks
iOS 18+ sends the native emoji tapback (`amt` 2006/3006 + `ame` + `amk` = exact target) only to devices whose IDS
registration advertises `supports-stick-moji-backs`; others get a plain-text fallback with no target GUID for
photos, videos and attachments.
- **Turn it on** only if you want emoji from iOS 18+ devices without Tapbacks18 to show on the exact photo or file. You do
  **not** need it for text messages, or between devices that all have Tapbacks18.
- `Tapbacks18IDS` (identityservicesd) adds the capability to the iMessage client data. It applies only after iMessage
  registers again: toggle iMessage off and on (Settings → Messages → iMessage) after turning it on **or off**. This changes
  the registration data sent to Apple. It has been tested on the developer's own devices without any sign of being
  flagged, but use it at your own risk.
- Before uninstalling Tapbacks18, turn it off and toggle iMessage again; otherwise iOS 18+ keeps sending emoji tapbacks
  that this device cannot show.

## Known limitations
- **Notifications and the conversation-list preview say "loved …"** for an emoji tapback. Those strings are built from the
  classic tapback type (`IMTapback previewString…`), which only sees the heart. Not fixed.
- Sticker tapbacks from iOS 18 (`amt` 2007/3007) become a plain-text message ("Reacted with a sticker").
- If the tweak is not loaded (e.g. reboot into jailed mode), emoji tapbacks show as hearts.
- iOS 16/17 devices without the tweak may not display `amt` 2006 at all.
- The pinned-conversation tapback bubble (`CKPinnedConversationTapbackBubble`) does not show emoji.
- Tapbacks stored by very old builds that carried a `tbr` summary key are no longer handled.

## To do
- iOS 15 support.
- Group chat support.
- Show who reacted with which emoji.
