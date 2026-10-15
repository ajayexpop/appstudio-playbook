# Let people sign in and register

From your app's events to a sign-in screen that lets people in the way your event works.

**The result:** Your app signs people in to each event the way your event works, with your button texts and sign-in pictures, and lets new visitors register if you want it to.

Sources: [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/), [How to let new visitors register from the sign-in screen](https://ajayexpop.github.io/appbuilder/build/app-sign-in/add-register-button/), [How to change the sign-in pictures and the loading backdrop](https://ajayexpop.github.io/appbuilder/look/design/change-sign-in-pictures/).

_App Studio Playbook v1.0.0, built from the App Studio guide v1.0.1, checked against App Studio bea65df on 14 Oct 2026. Each step links to the App Studio guide pages it comes from._

## Who does what

- **Your move**: You check the app's events, then set each event's sign-in, registration and sign-in pictures in App Studio.

Sources: [Events & updates](https://ajayexpop.github.io/appbuilder/build/app-general/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [How to change the sign-in pictures and the loading backdrop](https://ajayexpop.github.io/appbuilder/look/design/change-sign-in-pictures/).

## Before you start, have ready

- Your events in your ExpoPlatform admin. For an app with several events, give them an event tag there.
- How each event signs people in (in the app, on a web page or both), and whether they must sign in right after choosing the event.
- For sign-in on a web page: its address, or none to use the event's own sign-in page.
- The button texts in each language your visitors use, up to 30 characters each.
- Where new visitors register: the event's registration page, or another website's address.
- The sign-in pictures: PNG or JPEG files of up to 10 MB, each side at least 200 px. The Login background is cropped 2:1, the Home / loading backdrop 9:16 and the Login logo square.
- A wide browser window: the sign-in preview shows only on wide screens.

Sources: [How to make the app offer several events, chosen by event tag](https://ajayexpop.github.io/appbuilder/build/app-general/choose-events-by-tag/), [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/), [How to change the texts of the sign-in buttons, in each language](https://ajayexpop.github.io/appbuilder/build/app-sign-in/edit-button-texts/), [How to let new visitors register from the sign-in screen](https://ajayexpop.github.io/appbuilder/build/app-sign-in/add-register-button/), [How to change the sign-in pictures and the loading backdrop](https://ajayexpop.github.io/appbuilder/look/design/change-sign-in-pictures/), [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/).

## Stage 1: Choose the events

Sign-in & registration keeps its settings per event, so the app's events come first.

Sources: [Events & updates](https://ajayexpop.github.io/appbuilder/build/app-general/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/).

### 1. In Events & updates, check which events the app offers, and press Save changes if you change them.

- Who: Your move
- On screen (drawn from App Studio's code): The app is for (Several events, by event tag), Event tags
- Why: Until the app's events are chosen here, Sign-in & registration shows only a message asking you to choose them.
- Watch out: For Several events, by event tag, your events need tags in your ExpoPlatform admin, and App Studio saves only with at least one tag ticked.
- Watch out: Saving here also writes the choice of events to your ExpoPlatform admin, which gives the app its list of events.
- Done when: The events your app should offer are chosen, and App Studio says “Saved” after a change.
- Go deeper: [How to make the app offer several events, chosen by event tag](https://ajayexpop.github.io/appbuilder/build/app-general/choose-events-by-tag/), [How to make the app for one event](https://ajayexpop.github.io/appbuilder/build/app-general/choose-one-event/), [Events & updates](https://ajayexpop.github.io/appbuilder/build/app-general/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/)

### 2. Open Sign-in & registration and choose the event in Event.

- Who: Your move
- Picture: Sign-in & registration, in the App group of the menu on the left, a screenshot of App Studio
- Why: Each event has its own settings, which start from its values in the old App Builder.
- Watch out: Later changes in the old App Builder no longer reach your App Studio app: make them here.
- Done when: The event's settings show, starting with Signing in.
- Go deeper: [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/), [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/), [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/)

## Stage 2: Choose how people sign in

Set how people sign in to the event you chose. Of these settings, only the button texts are kept per language.

Sources: [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/).

### 3. In Signing in, choose Sign-in: In the app, On a web page or Both.

- Who: Your move
- On screen (drawn from App Studio's code): Sign-in (Both), Web sign-in address, When people must sign in, Sign-in button, Web sign-in button, Scan-to-sign-in button, Show the event's name on the sign-in screen
- Why: In the app signs people in with the app's own form, On a web page sends them to a web page, and Both offers both, with a second button.
- Watch out: With Web sign-in address left empty, people sign in on the event's own sign-in page; an address over 2000 characters is refused when you save.
- Done when: The phone preview shows the sign-in screen with your choice.
- Go deeper: [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/), [Sign-in & registration: field reference](https://ajayexpop.github.io/appbuilder/build/app-sign-in/fields/), [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/)

### 4. Choose When people must sign in: Right after choosing the event or When they open their account.

- Who: Your move
- On screen (drawn from App Studio's code): Sign-in (In the app), When people must sign in, Sign-in button, Scan-to-sign-in button, Show the event's name on the sign-in screen
- Why: With Right after choosing the event, people sign in before they enter the event; otherwise they enter as guests and can sign in later from the side menu.
- Watch out: The preview always opens on the sign-in screen, whichever you choose.
- Done when: When people must sign in shows the choice your event needs.
- Go deeper: [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/)

### 5. Write the Sign-in button and Scan-to-sign-in button texts, and for Both, the Web sign-in button.

- Who: Your move
- On screen (drawn from App Studio's code): Sign-in (Both), Web sign-in address, When people must sign in, Sign-in button, Web sign-in button, Scan-to-sign-in button, Show the event's name on the sign-in screen
- Why: The app's sign-in screen shows them on its buttons, in each language you save them in.
- Watch out: Each takes up to 30 characters; left empty, the buttons read “Log in”, “Scan login” and “Log in with SSO”.
- Watch out: A language you never saved them in shows the English text, else the first language written: save them in each language your visitors use.
- Watch out: The scan button shows only when sign-in by scanning a badge is on for the event.
- Done when: The phone preview shows your texts on the buttons it shows.
- Go deeper: [How to change the texts of the sign-in buttons, in each language](https://ajayexpop.github.io/appbuilder/build/app-sign-in/edit-button-texts/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/)

### 6. Switch Show the event's name on the sign-in screen on or off.

- Who: Your move
- On screen (drawn from App Studio's code): Sign-in (In the app), When people must sign in, Sign-in button, Scan-to-sign-in button, Show the event's name on the sign-in screen
- Why: With the switch off, the sign-in screen shows no event name, dates or logo at the top.
- Done when: The phone preview shows the top of the sign-in screen the way you want it.
- Go deeper: [How to show or hide the event's name on the sign-in screen](https://ajayexpop.github.io/appbuilder/build/app-sign-in/event-name-on-sign-in/), [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/)

## Stage 3: Let new visitors register

A register button on the sign-in screen can open the event's registration page, another website or the app's own registration form.

Sources: [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [How to let new visitors register from the sign-in screen](https://ajayexpop.github.io/appbuilder/build/app-sign-in/add-register-button/), [How to use the app's own registration form](https://ajayexpop.github.io/appbuilder/build/app-sign-in/native-registration/).

### 7. In Registration, switch on Show the register button, give it a text and choose Registration happens.

- Who: Your move
- On screen (drawn from App Studio's code): Show the register button (on), Register button, Registration happens (Another website), Registration website
- Why: The button opens the event's own registration page, or the Registration website you enter for Another website.
- Watch out: The button shows only while the switch is on and there is a registration address to open.
- Watch out: Its text is kept per language, up to 30 characters; left empty, it reads “Registration”.
- Done when: The phone preview shows the register button with your text.
- Go deeper: [How to let new visitors register from the sign-in screen](https://ajayexpop.github.io/appbuilder/build/app-sign-in/add-register-button/), [Sign-in & registration: field reference](https://ajayexpop.github.io/appbuilder/build/app-sign-in/fields/), [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/)

### 8. For the app's own registration form instead of the web page, switch on Native registration form.

- Who: Your move
- On screen (drawn from App Studio's code): Show the register button (on), Register button, Registration happens (The event's registration page), Native registration form
- Why: On events with the new registration switched on, the sign-in screen's “Registration” button and “Sign up” link then open the app's own form.
- Watch out: It is for the whole app, and it shows only while Show the register button is on and Registration happens is The event's registration page.
- Watch out: The new registration is a setting of each event, not one in App Studio: events without it keep the registration web page.
- Watch out: It is saved first: if that fails, a red message shows and the event's settings are not saved either.
- Done when: Native registration form is switched on.
- Go deeper: [How to use the app's own registration form](https://ajayexpop.github.io/appbuilder/build/app-sign-in/native-registration/)

## Stage 4: Finish and save each event

Edits stay in the form, and in the preview, until Save changes, which saves only what changed for this event and language.

Sources: [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/).

### 9. Under Features, choose whether people see their badge while the event's data downloads after sign-in.

- Who: Your move
- On screen (drawn from App Studio's code): Show the participant's badge as the loading screen, Ring around QR codes, Scan badges by reading the printed text (OCR), AI meeting notes
- Why: With Show the participant's badge as the loading screen on, the person's digital badge fades in over the loading screen while the event's data downloads.
- Watch out: It is not for exhibitor company owners, and it shows only when the person has a QR code.
- Watch out: AI meeting notes, in the same block, is for the whole app: switch it only if you mean every event.
- Done when: The badge switch is set the way you want it for this event.
- Go deeper: [How to switch the badge and scanning features of an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/switch-features/)

### 10. Check the sign-in screen in the phone beside the form, then press Save changes.

- Who: Your move
- On screen: **Saved** “The sign-in screen as a signed-out visitor sees it. Saved changes reach the app itself.” “Changes reach the app the next time it refreshes.”
- Why: The phone shows the event's sign-in screen as a signed-out visitor sees it, with your unsaved changes.
- Watch out: If you see no phone, widen the window: the preview shows only on wide screens.
- Watch out: The preview draws the event's stored logo, list background and sign-in button colours, which this section has no field to change.
- Done when: App Studio says “Saved”.
- Go deeper: [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/)

### 11. Repeat the button texts for each language, and the whole section for each event.

- Who: Your move
- On screen (drawn from App Studio's code): Event, Language of the texts
- Why: Each event keeps its own settings, chosen in Event, and only the button texts are kept per language, chosen in Language of the texts.
- Watch out: Switching the event or the language drops unsaved edits without asking: save first.
- Watch out: The sign-in mode, the addresses and the switches hold one value for every language: changing one under any language changes it for all.
- Watch out: Native registration form and AI meeting notes are for the whole app, not only the event you are editing.
- Done when: Every event, and every language your visitors use, is saved.
- Go deeper: [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [How to change the texts of the sign-in buttons, in each language](https://ajayexpop.github.io/appbuilder/build/app-sign-in/edit-button-texts/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/)

## Stage 5: Set the sign-in pictures

Sign-in & registration has no field for the sign-in pictures, button colours or fonts: Colours & fonts sets them for each event.

Sources: [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [Colours & fonts](https://ajayexpop.github.io/appbuilder/look/design/).

### 12. In Colours & fonts, under Pictures, set the Login background, Login logo and Home / loading backdrop.

- Who: Your move
- Picture: Pictures, in Colours & fonts, a screenshot of App Studio
- Why: Pictures is for “The sign-in screen and the backdrop shown while the home screen loads.”
- Watch out: With several events, pick the event in the Colours header first.
- Watch out: A picture is stored as soon as you upload it, but the app uses it only after Save changes, which also saves Name, icon & splash.
- Watch out: To see the sign-in screen in the phone, choose Boot flow below the form: it walks through the splash, login and choose event.
- Done when: Each picture you set says “Your picture.”, and you pressed Save changes.
- Go deeper: [How to change the sign-in pictures and the loading backdrop](https://ajayexpop.github.io/appbuilder/look/design/change-sign-in-pictures/), [How to change an event's colours](https://ajayexpop.github.io/appbuilder/look/design/change-event-colours/), [Colours & fonts](https://ajayexpop.github.io/appbuilder/look/design/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [Colours & fonts: field reference](https://ajayexpop.github.io/appbuilder/look/design/fields/)

## Stage 6: Check what people see

Saved changes to sign-in, pictures, menu and home screen reach installed builds of this app the next time they refresh, with no new build.

Sources: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/).

### 13. If guests can enter, set View as to Guest (not signed in) in Menu & content and tap through each event's menu.

- Who: Your move
- On screen (drawn from App Studio's code): View as (Guest (not signed in))
- Why: A menu item with anything ticked under Visible for is not shown to people who are not signed in.
- Watch out: On the Home screen, each block's Who sees it is Everyone, Guests only or Signed-in only: check it with Guest preview.
- Watch out: On a page from Custom pages, Who sees it decides what the app shows but does not protect the page: “everything on a page can be read by anyone who has your app.”
- Watch out: After you pick another event in Event, set View as to Guest (not signed in) again: it starts on Visitor.
- Done when: Seen as a guest, each event's menu holds what you want people to see before they sign in.
- Go deeper: [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [How to limit who sees an item](https://ajayexpop.github.io/appbuilder/build/app-menu/limit-audience/), [How to show a custom page to guests only](https://ajayexpop.github.io/appbuilder/build/app-menu/guests-only-page/), [How to choose who sees a block](https://ajayexpop.github.io/appbuilder/look/home/block-audience/), [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [How to show a block only to guests or only to signed-in people](https://ajayexpop.github.io/appbuilder/look/pages/limit-a-block/)

### 14. Check the sign-in screen on a phone with a build of this app installed, once the app has refreshed.

- Who: Your move
- No new build: Sign-in & registration: at the next refresh; Colours & fonts, with the sign-in pictures: at the next refresh; Menu & content and Home screen: at the next refresh.
- Needs a new build and store release: The app icon; The name under the icon (in store builds, the store name); The splash picture and its colour; Switching a home-screen widget on or off.
- Why: Sign-in settings and pictures reach installed builds of this app with no new build or store release.
- Watch out: Only saved changes reach phones, while the previews also show unsaved ones.
- Watch out: Your old apps never show what you save here: a phone shows it only once a build of this app is installed, a test build from Build & test first.
- Done when: The phone's sign-in screen shows your texts, buttons and pictures.
- Go deeper: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/), [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/)

## Something's wrong?

- **Sign-in & registration asks you to choose the events in Events & updates first.** Why: No event is chosen for the app yet, and these settings are kept per event. What to do: In Events & updates, choose the event or the event tags and save, then choose an event in Event. See: [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/), [Events & updates](https://ajayexpop.github.io/appbuilder/build/app-general/).
- **Events & updates says “No event has a tag yet. Tag your events in your admin first.”** Why: Several events, by event tag is chosen, and no event in your ExpoPlatform admin has a tag yet. What to do: Tag your events in your ExpoPlatform admin, then come back. See: [How to make the app offer several events, chosen by event tag](https://ajayexpop.github.io/appbuilder/build/app-general/choose-events-by-tag/).
- **My changes disappeared when I picked another event or language.** Why: In Menu & content, Sign-in & registration and Events & updates, switching the event or the language drops unsaved changes without asking. What to do: Make the changes again, and save before you switch. See: [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/).
- **A change I made under one language shows in every language.** Why: Only the button texts are kept per language; the sign-in mode, the addresses and the switches hold one value for every language. What to do: Set those once for each event, and write only the button texts in each language. See: [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/).
- **The register button does not show on the sign-in screen.** Why: It shows only while Show the register button is on and there is a registration address to open. What to do: Switch it on and save; with Another website, fill in Registration website, and with The event's registration page, the event needs a registration page of its own to open. See: [How to let new visitors register from the sign-in screen](https://ajayexpop.github.io/appbuilder/build/app-sign-in/add-register-button/), [Sign-in & registration: field reference](https://ajayexpop.github.io/appbuilder/build/app-sign-in/fields/).
- **Saving says “This could not be saved - try again” or “Reopen App Studio from your admin”.** Why: The first means the save did not go through, and your edits stay in the form; the second means your App Studio session has ended. What to do: For the first, press Save changes again; for the second, open App Studio again from your ExpoPlatform admin and make the change again. See: [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/), [Open App Studio](https://ajayexpop.github.io/appbuilder/start/open/).
- **There is no phone beside the form, or it shows “Loading the preview…” or “The app's config could not be loaded…”** Why: The preview shows only on wide screens and can stay loading when its data is refused; the second message means the preview could not get what it needs to start. What to do: Use a wider window; if it stays loading, wait a moment, then open the section again; for the second message, try again in a minute. See: [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/).
- **The sign-in screen still shows the old pictures.** Why: Sign-in & registration cannot change them, and its preview draws the event's stored ones; Colours & fonts sets them, and the app uses them only after Save changes there. What to do: In Colours & fonts, with the right event picked, set them under Pictures, press Save changes, and check them there with Boot flow. See: [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/), [How to change the sign-in pictures and the loading backdrop](https://ajayexpop.github.io/appbuilder/look/design/change-sign-in-pictures/), [Colours & fonts: field reference](https://ajayexpop.github.io/appbuilder/look/design/fields/).
- **Phones still show the old sign-in screen.** Why: Installed apps show saved changes the next time they refresh, and only saved changes reach them; your old apps never show them. What to do: Check that you saved each event and language you changed, and that the phone has a build of this app, such as a test build from Build & test; it then shows them at its next refresh. See: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to check the sign-in screen before saving](https://ajayexpop.github.io/appbuilder/build/app-sign-in/check-preview/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/).
