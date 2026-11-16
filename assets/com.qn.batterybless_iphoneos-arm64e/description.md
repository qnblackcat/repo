# BatteryBless

Makes Settings treat a replaced battery as a genuine one, and shows more about your battery.

After a battery replacement outside Apple, iOS often says "Unable to verify this iPhone has a genuine Apple battery", hides **Maximum Capacity** and **Peak Performance Capability**, and lists the battery as an **Unknown Part**. BatteryBless fixes how Settings *shows* this. Your battery is not changed in any way.

## What it does

- **Removes the genuine-battery warning.** Settings → Battery → Battery Health & Charging stops saying the battery can't be verified, and Maximum Capacity and Peak Performance appear again.
- **Adds more battery info** to the same page (Cycle count, Charge status, Temperature,...).
- **Hides the "Unknown Part" battery** in Settings → General → About → Parts & Service History. Other parts (screen, camera…) and genuine Apple part records stay as they are.

## Note:

- The tweak does **not** patch how the kernel authenticates the battery. See: https://github.com/qnblackcat/BatteryBless/blob/main/RESEARCH.md
- It only changes what Settings displays. It does not make Apple, a repair shop or any other app treat the battery as genuine.
- If the battery has no capacity data yet (new battery, or iOS has not measured it), Maximum Capacity can stay empty for a while. This is iOS, not the tweak.
- The charge, current and temperature rows are a snapshot taken when you open the page. Leave the page and come back to refresh them.
