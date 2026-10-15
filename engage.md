# Get people using the app

From a widget's switch to the new version that carries it, and from your game's wording to drawing the prize.

**The result:** The home-screen widgets you chose ship in a new version of your app, and your event runs Play & Win and you draw the prize from its entries.

Sources: [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [How to offer a home-screen widget in your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-on/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/).

_App Studio Playbook v1.0.1, built from the App Studio guide v1.1.0, checked against App Studio c1421d4 on 14 Oct 2026. Each step links to the App Studio guide pages it comes from._

## Who does what

- **Your move**: You set up Play & Win for each event in App Studio and draw the prize from its entries; you choose the home-screen widgets, make a new build and ask to publish it.
- **Our team is on it**: Your ExpoPlatform team switches the app's AI assistant on, which Ask the assistant needs; they approve your request to publish the new version and start its rollout, and can change the same Play & Win settings from their own admin.
- **The store is on it**: Apple and Google review the new version before people can download it.

Sources: [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [How to offer a home-screen widget in your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-on/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/).

## Before you start, have ready

- For the widgets, an app you can build: ExpoPlatform must have set it up in the App Store and Google Play.
- For Ask the assistant, the app's AI assistant, which your ExpoPlatform team switches on, and the AI Synapsium block on your Home screen, which gives the widget its title, its line and the assistant's name.
- An event in your app: Play & Win runs per event, and each event has its own game and entries.
- Your own wording for any Play & Win text you want to change, in each language you need.
- Your picture for the game, a PNG or JPEG of up to 10 MB, and the web address for the Book a meeting button if you want one.
- For the stand kiosk, an iPad: it opens the kiosk link in Safari.

Sources: [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/), [How to offer a home-screen widget in your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-on/), [Home screen blocks and home-screen widgets](https://ajayexpop.github.io/appbuilder/look/home-blocks-vs-widgets/), [How to run Play & Win for an event](https://ajayexpop.github.io/appbuilder/look/play-win/run-play-win/), [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [How to change the wording of a Play & Win screen](https://ajayexpop.github.io/appbuilder/look/play-win/edit-texts/), [How to set the game's picture and the Book a meeting link](https://ajayexpop.github.io/appbuilder/look/play-win/picture-and-link/), [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/).

## Stage 1: Choose your home-screen widgets

There are three widgets, Event stats, My agenda and Ask the assistant, set once for the whole app, which people place on their phone's own home screen. Start early: a widget you switch on ships with your next build, so switch it on before your app's first build, or ship it in a new version.

Sources: [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/), [How to offer a home-screen widget in your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-on/).

### 1. In Home-screen widgets, press a widget's switch so that it reads On.

- Who: Your move
- Picture: The Event stats switch, reading Off, a screenshot of App Studio
- Why: A widget you switch on ships with your next build, so people can add it to their phone's home screen.
- Watch out: The switch saves at once, with the widget's last saved counters and colours, never unsaved ones.
- Watch out: Ask the assistant needs the app's AI assistant, which your ExpoPlatform team switches on; until then App Studio warns that this widget “would have nothing to open”.
- Watch out: Switching a widget off works the same way: your next build leaves it out, so people cannot add it to their home screen.
- Done when: App Studio confirms with the widget's name and “is on. It ships with your next build.”
- Go deeper: [How to offer a home-screen widget in your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-on/), [Home screen blocks and home-screen widgets](https://ajayexpop.github.io/appbuilder/look/home-blocks-vs-widgets/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/), [How to take a widget out of your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-off/)

### 2. For Event stats, while it is on, choose up to three counters, in order, and press Save changes.

- Who: Your move
- Picture: Counters, in order, with the three default counters, a screenshot of App Studio
- Why: Event stats shows up to three counters, in your order, and each person sees their own numbers.
- Watch out: Three counters are chosen at first, so the other buttons are hidden: remove one to add another (“Up to 3 counters. Remove one to swap it.”).
- Watch out: With no counter chosen, Save changes is held back: add one (“Choose at least one counter.”).
- Watch out: These are not the counters of the Stats at a glance block on the app's Home screen, which has its own list, set per event.
- Done when: App Studio says “Widgets saved”.
- Go deeper: [How to choose what Event stats counts](https://ajayexpop.github.io/appbuilder/look/widgets/counters/), [How to go back to a widget's default settings](https://ajayexpop.github.io/appbuilder/look/widgets/defaults/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/), [Home-screen widgets: field reference](https://ajayexpop.github.io/appbuilder/look/widgets/fields/), [Home screen blocks and home-screen widgets](https://ajayexpop.github.io/appbuilder/look/home-blocks-vs-widgets/)

### 3. Under each widget's Colours, choose Light or dark or Brand colour, and press Save changes.

- Who: Your move
- Picture: Colours for My agenda, with the Light and Dark preview cards, a screenshot of App Studio
- Why: Light or dark follows the phone's light or dark mode, and Brand colour gives the widget your brand colour.
- Watch out: Colours can be changed only while the widget is on.
- Done when: The preview shows a Light and a Dark card, or one Brand colour card, and you pressed Save changes.
- Go deeper: [How to choose a widget's colours](https://ajayexpop.github.io/appbuilder/look/widgets/colours/), [How to go back to a widget's default settings](https://ajayexpop.github.io/appbuilder/look/widgets/defaults/)

## Stage 2: Ship the widgets in a new version

Switching a widget on or off reaches phones only with a new build: a test build first, then a store release, after ExpoPlatform's approval, the store's review and the rollout.

Sources: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/).

### 4. Make a new build in Build & test, check it on your phone, and publish it as a new version.

- Who: Your move
- Picture: The Build & test button at the top of every page of your app, a screenshot of App Studio
- Why: A new version goes the same way as your first: build, test, Submit to the stores, ExpoPlatform's approval, the store's review and the rollout.
- Watch out: A later iPhone version, and Android beyond its first 5%, wait for your ExpoPlatform team to start the rollout: ask your ExpoPlatform contact.
- Watch out: On iPhone, the set-up step “Home-screen widgets ready” in Publish is done by your ExpoPlatform team, or by a signed iOS build, and does not block a release.
- Done when: The new version's release reads Live on Releases.
- Step by step: [Release a new version](update.md)
- Go deeper: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to offer a home-screen widget in your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-on/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

## Stage 3: Make the game your own

Play & Win is a guessing game: attendees guess a number, agree to a separate consent, and you draw the prize from the entries. Each event runs its own game: read and set its texts, picture and link before you switch it on.

Sources: [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [How to run Play & Win for an event](https://ajayexpop.github.io/appbuilder/look/play-win/run-play-win/).

### 5. In Play & Win, under Texts, read each screen's wording, one language at a time, change what you want, and save.

- Who: Your move
- Picture: Texts, with the language box and the Voting screen card, a screenshot of App Studio
- Why: Your text replaces the app's own wording in that language only; texts you leave alone keep the app's wording.
- Watch out: With several events, pick the event in Event first: Save Play & Win saves the selected event only.
- Watch out: Consent holds the separate consent an attendee ticks before the vote is sent: changing it, in any language, makes a new consent version once you save.
- Watch out: A text marked No default shows nothing in that language: type your own text for it.
- Done when: Each card you changed shows how many texts are yours, such as “1 edited”, and you pressed Save Play & Win.
- Go deeper: [How to change the wording of a Play & Win screen](https://ajayexpop.github.io/appbuilder/look/play-win/edit-texts/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [How to run Play & Win for an event](https://ajayexpop.github.io/appbuilder/look/play-win/run-play-win/), [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/)

### 6. Under Picture and link, upload your picture, add a “Book a meeting” link if you want one, and save.

- Who: Your move
- Picture: Picture, with Upload, beside the “Book a meeting” link, a screenshot of App Studio
- Why: Your picture replaces the trophy cups, and the final screen's Book a meeting button opens your link outside the app.
- Watch out: The picture is stored as soon as it is uploaded, or fetched from a link you paste in Or paste a link to a picture, but this event uses it only after Save Play & Win.
- Watch out: With no link, the final screen shows no Book a meeting button.
- Done when: Your picture's thumbnail shows under Picture, and you saved.
- Go deeper: [How to set the game's picture and the Book a meeting link](https://ajayexpop.github.io/appbuilder/look/play-win/picture-and-link/), [Play & Win: field reference](https://ajayexpop.github.io/appbuilder/look/play-win/fields/)

## Stage 4: Switch Play & Win on and try it

Once Play & Win is on and saved, and in the event's menu, signed-in attendees see it there; Test mode lets you try it before the event starts.

Sources: [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [How to try Play & Win before the event starts](https://ajayexpop.github.io/appbuilder/look/play-win/test-early/).

### 7. In Play & Win, switch Play & Win on for your event and press Save Play & Win.

- Who: Your move
- Picture: The Play & Win switch at the top of Play & Win, a screenshot of App Studio
- Why: Signed-in attendees then see Play & Win in the event's menu, as long as Play & Win is in that menu.
- Watch out: With several events, pick the event in Event first: Save Play & Win saves the selected event only.
- Done when: App Studio says “Play & Win saved — attendees get it the next time they open the page”.
- Go deeper: [How to run Play & Win for an event](https://ajayexpop.github.io/appbuilder/look/play-win/run-play-win/), [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/)

### 8. Check that Play & Win is in the event's menu, in Menu & content.

- Who: Your move
- Picture: Menu & content in the sidebar, a screenshot of App Studio
- Why: The app's menu shows the Play & Win row only to signed-in people, only when the event's menu carries the row, and only while the campaign is on.
- Watch out: Menu & content shows one event at a time, and switching the event drops unsaved changes without asking: save first.
- Watch out: If it is not there, ask your ExpoPlatform contact to add it.
- Done when: You see Play & Win in the event's menu in Menu & content.
- Go deeper: [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [How to run Play & Win for an event](https://ajayexpop.github.io/appbuilder/look/play-win/run-play-win/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

### 9. Switch Test mode on and save, then try voting in the app while signed in.

- Who: Your move
- Picture: Test mode, under the Play & Win switch, a screenshot of App Studio
- Why: Voting then opens before the event starts, and still closes when the event ends.
- Watch out: Test mode opens voting for everyone who can see Play & Win, not only for you.
- Watch out: A vote made while testing is a real entry: it shows in Entries and counts as that person's one entry for the event.
- Watch out: If voting should then wait for the event, switch Test mode off and save again.
- Done when: Your test vote shows in Entries after you press Refresh.
- Go deeper: [How to try Play & Win before the event starts](https://ajayexpop.github.io/appbuilder/look/play-win/test-early/), [Play & Win: field reference](https://ajayexpop.github.io/appbuilder/look/play-win/fields/)

## Stage 5: Let visitors play on the stand iPad

Visitors without the app type their name, company and e-mail on the stand iPad, guess, and enter the same draw. One e-mail plays once, in the app or on the kiosk.

Sources: [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/).

### 10. Under Kiosk (stand iPad), switch Kiosk on and press Save Play & Win.

- Who: Your move
- Picture: The Kiosk switch, off; switched on, it shows the QR code and the Kiosk link, a screenshot of App Studio
- Why: Switching it on creates the kiosk's private link and its QR code, and the link works once you save.
- Watch out: As App Studio says, “Anyone with this link can enter the draw from it, so share it only with the stand team.”
- Watch out: Play & Win itself must be on too: while it is off, the kiosk shows “Voting is closed”.
- Watch out: The kiosk has its own consent, separate from the app's: unless you reword it in Consent text, under Kiosk (stand iPad), the English one reads “By playing Play & Win you agree to receive emails about the prize draw.”
- Done when: The QR code and the Kiosk link show, without the Save to activate badge.
- Go deeper: [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/), [Play & Win: field reference](https://ajayexpop.github.io/appbuilder/look/play-win/fields/)

### 11. On the iPad, scan the QR code, add the page to the Home Screen and lock the iPad to it with Guided Access.

- Who: Your move
- On screen: “Open the link in Safari on the iPad: scan the QR code with its camera.” “Tap Share, then Add to Home Screen, and start Play & Win from the Home Screen: it runs full screen, in portrait or landscape.” “Lock the iPad to it with Guided Access (Settings, Accessibility, Guided Access; then triple-click the top button), and set Display & Brightness, Auto-Lock to Never while the stand is open.” “After each vote the page clears itself for the next visitor after 20 seconds.”
- Why: Kiosk votes are real entries: they show in Entries with the source Kiosk.
- Watch out: If the iPad shows “This page is not available.”, check that Kiosk is on and saved, and that the iPad opened the current link.
- Watch out: A new link, made with New link and saved, replaces the old one, which then stops working: scan the new QR code on the iPad.
- Watch out: To pause the kiosk, switch Kiosk off and save; switching it on again brings back the same link.
- Done when: Play & Win runs full screen on the iPad, from its Home Screen.
- Go deeper: [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/), [How to replace the kiosk link](https://ajayexpop.github.io/appbuilder/look/play-win/new-kiosk-link/)

## Stage 6: Close voting and draw the prize

Once the campaign is finished, voting is never open, on the kiosk too. Entries are deleted three weeks (21 days) after the event ends, so download them before then.

Sources: [How to close voting and show the result](https://ajayexpop.github.io/appbuilder/look/play-win/finish/), [How to download the entries for the prize draw](https://ajayexpop.github.io/appbuilder/look/play-win/download-entries/).

### 12. Under Result, switch Campaign finished on, type the Actual number and press Save Play & Win.

- Who: Your move
- Picture: Campaign finished, under Result, a screenshot of App Studio
- Why: Voting closes, and attendees who voted see their guess beside the actual number on the final screen.
- Watch out: If App Studio says “Fix the highlighted fields before saving.”, fill in or correct the number: a whole number, digits only, up to 999,999,999, such as 13050.
- Done when: You saved with Campaign finished on and the actual number filled in.
- Go deeper: [How to close voting and show the result](https://ajayexpop.github.io/appbuilder/look/play-win/finish/)

### 13. Before the draw, delete each test entry with its trash button in Entries, then Delete entry.

- Who: Your move
- On screen (drawn from App Studio's code): Keep it, Delete entry
- Why: Votes made while testing, in the app or on the kiosk, are real entries until you delete them.
- Watch out: Deleting cannot be undone: the entry leaves the prize draw for good.
- Done when: The list reloads without the entry.
- Go deeper: [How to delete an entry](https://ajayexpop.github.io/appbuilder/look/play-win/delete-entry/), [How to try Play & Win before the event starts](https://ajayexpop.github.io/appbuilder/look/play-win/test-early/), [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/)

### 14. In Entries, press Refresh, then Download CSV for the prize draw.

- Who: Your move
- On screen (drawn from App Studio's code): Refresh, Download CSV
- Why: The file lists every entry of the event, from the app or the kiosk, whatever the attendee's Networking setting.
- Watch out: Entries are deleted three weeks (21 days) after the event ends: download them before then.
- Done when: A file named play-win-[event]-[date].csv is on your computer.
- Go deeper: [How to download the entries for the prize draw](https://ajayexpop.github.io/appbuilder/look/play-win/download-entries/), [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/)

## Something's wrong?

- **Ask the assistant warns that the AI assistant is not switched on.** Why: The app's AI assistant is set by your ExpoPlatform team, and without it this widget “would have nothing to open”. What to do: Ask your ExpoPlatform contact. See: [How to offer a home-screen widget in your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-on/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/).
- **People cannot add a widget you switched on to their home screen.** Why: A widget ships with your next build: phones need a build made after you switched it on. What to do: Make a new build in Build & test and publish it as a new version; phones show the change once it is installed, and to have people on older versions asked, or made, to update, ask your ExpoPlatform contact. See: [How to offer a home-screen widget in your app](https://ajayexpop.github.io/appbuilder/look/widgets/switch-on/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/).
- **The phone preview does not show my wording.** Why: The preview beside the page always shows Play & Win with the app's default texts and voting open, whatever you set. What to do: Save your texts: as App Studio says, “Attendees get it the next time they open Play & Win.” See: [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [How to change the wording of a Play & Win screen](https://ajayexpop.github.io/appbuilder/look/play-win/edit-texts/).
- **Attendees do not see Play & Win in the app.** Why: The app shows the Play & Win row only to signed-in people, only when the event's menu carries the row, and only while the campaign is on. What to do: Check that Play & Win is on and saved for that event, and that it is in that event's menu in Menu & content; if it is not, ask your ExpoPlatform contact; people see it only once they are signed in. See: [How to run Play & Win for an event](https://ajayexpop.github.io/appbuilder/look/play-win/run-play-win/), [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/).
- **People cannot vote, in the app or on the kiosk.** Why: Voting is open during the event's own dates, or earlier while Test mode is on, and never once the campaign is finished; the kiosk also needs Play & Win itself on. What to do: Switch Play & Win on and save; to open voting before the event starts, switch Test mode on and save. See: [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [How to try Play & Win before the event starts](https://ajayexpop.github.io/appbuilder/look/play-win/test-early/), [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/).
- **The iPad shows “This page is not available.” instead of the game.** Why: The link is wrong, the kiosk is off or not saved, or the app is archived; the page never says which. What to do: Check that Kiosk is on and saved, and that the iPad opened the current link: after New link, save and scan the new QR code. See: [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/), [How to replace the kiosk link](https://ajayexpop.github.io/appbuilder/look/play-win/new-kiosk-link/).
- **“This email has already played.” shows on the kiosk.** Why: The typed e-mail already has an entry for this event, from the app or the kiosk. What to do: One e-mail plays once per event, in the app or on the kiosk: that e-mail's entry is already in Entries. See: [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/), [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/).
- **The iPad shows “Couldn't load Play & Win”.** Why: The page could not reach the server; it tries again every 15 seconds. What to do: Check the iPad's connection: as the page says, “Check the connection. The page tries again by itself.” See: [How to set up the stand iPad kiosk](https://ajayexpop.github.io/appbuilder/look/play-win/set-up-kiosk/).
- **“Fix the highlighted fields before saving.” shows when you press Save Play & Win.** Why: The actual number or the Book a meeting link has a problem. What to do: Correct the highlighted field, then save: the actual number is a whole number, digits only, up to 999,999,999, and the link a full web address, or empty. See: [How to run Play & Win for an event](https://ajayexpop.github.io/appbuilder/look/play-win/run-play-win/), [How to close voting and show the result](https://ajayexpop.github.io/appbuilder/look/play-win/finish/), [How to set the game's picture and the Book a meeting link](https://ajayexpop.github.io/appbuilder/look/play-win/picture-and-link/).
