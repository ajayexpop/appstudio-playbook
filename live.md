# Change content during the event

From a change you need during the event to installed apps showing it, with no new version.

**The result:** Installed apps show your changes to the menu, the home screen, pages and texts, for the right event and language, with no new version.

Sources: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/).

_App Studio Playbook v1.0.1, built from the App Studio guide v1.1.0, checked against App Studio c1421d4 on 14 Oct 2026. Each step links to the App Studio guide pages it comes from._

## Who does what

- **Your move**: You change the menu, the home screen, the pages in Custom pages and texts in App Studio, check them and save them.
- **Our team is on it**: Your ExpoPlatform team can also change the same menu, the pages in Custom pages and texts; for a new version, they approve your request to publish (they do by default) and start the rollout.
- **The store is on it**: For a new version, Apple and Google review it before it rolls out.

Sources: [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/).

## Before you start, have ready

- Access to your ExpoPlatform admin: App Studio opens only from there, not from a link or a bookmark.
- A wide screen: the phone previews of Menu & content and Sign-in & registration show only on wide screens.
- Each change you need, with the event and the language it is for.
- Your words for each language the app offers: menu names, page texts and your wording in Translations are kept per language.

Sources: [Open App Studio](https://ajayexpop.github.io/appbuilder/start/open/), [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/).

## Stage 1: Before the event

Most changes you save reach installed apps by themselves, the next time the app refreshes. Settle the icon, the name under it (in store builds, the store name), the splash picture and its colour, and which home-screen widgets are on before the event: they reach phones only with a new build.

Sources: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/).

### 1. Know which changes reach installed apps by themselves, and which need a new version.

- Who: Your move
- Reaches installed apps by itself: Colours & fonts, Home screen, Menu & content and Custom pages: at the next refresh; Sign-in & registration: at the next refresh; Texts in Translations: within about 30 minutes; Your choice of events in Events & updates: no new build; What a home-screen widget shows: no new build; Play & Win: no new build.
- Needs a new build and store release: The app icon; The name under the icon (in store builds, the store name); The splash picture and its colour; Switching a home-screen widget on or off.
- Why: Changes to the menu, the home screen, pages and texts need no new build.
- Watch out: Name, icon & splash shows the same save-bar line as the other sections, but phones show the icon, the name under it (in store builds, the store name), and the splash picture and its colour only after a new build is installed.
- Watch out: A home-screen widget's switch saves at once, with no save button, and reaches phones only with your next build.
- Done when: You know which of your changes need a new version.
- Go deeper: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Events & updates](https://ajayexpop.github.io/appbuilder/build/app-general/), [Play & Win](https://ajayexpop.github.io/appbuilder/look/play-win/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/)

## Stage 2: Open the right event and language

Menu & content, Home screen, Custom pages and Sign-in & registration keep most settings per event, and their texts per language. Your wording in Translations is per language, for every event of the app.

Sources: [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/).

### 2. Open App Studio from your admin, then your app, and the section you want to change.

- Who: Your move
- Picture: The sections of your app, in the menu on the left of every page, a screenshot of App Studio
- Why: The menu on the left holds every section: Menu & content under App, and Home screen, Custom pages and Translations under Look.
- Watch out: A session lasts up to 8 hours: when it ends, open App Studio again from your admin and make again any change that was not saved.
- Watch out: If an amber bar says “This page is from an older deployment, so saving does nothing”, copy out what you typed, press Reload in the bar and make the change again.
- Done when: The section is open, with your app's name in the top bar.
- Go deeper: [Open App Studio](https://ajayexpop.github.io/appbuilder/start/open/), [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/)

### 3. Pick the event and the language you are changing, before you change anything.

- Who: Your move
- On screen (drawn from App Studio's code): Event, Language of the texts
- Why: In apps with several events, Home screen has an event select and Custom pages an event picker; the home's header texts and Custom pages pick the language with buttons such as EN and DE, and Translations has Language at the top of its list.
- Watch out: In Menu & content, Sign-in & registration and Events & updates, switching the event or the language drops unsaved changes without asking: save first.
- Watch out: Language of the texts starts on English each time you open the section.
- Watch out: In Sign-in & registration, only the button texts are kept per language: the sign-in mode, the addresses and the switches change for every language.
- Done when: The section shows the event and the language you want to change.
- Go deeper: [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [How to edit another event's home (apps with several events)](https://ajayexpop.github.io/appbuilder/look/home/other-event/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/)

## Stage 3: Make the change

Each section saves with its own button, and a few actions save at once, without it.

Sources: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to put the home back to the default](https://ajayexpop.github.io/appbuilder/look/home/restore-default/).

### 4. In Menu & content, rename, hide, move or add the event's menu items.

- Who: Your move
- On screen (drawn from App Studio's code): Section header, Bottom bar, Add to this section, Move up, Move down, Edit, Remove from the menu, Add
- Why: The change is for this event only, and item names are kept per language.
- Watch out: Save in an item's window saves the event's whole menu at once, with your other unsaved changes on the page.
- Watch out: Remove from the menu does not ask first, and once saved the item is gone in every language with its content: to keep it in App Studio, hide it instead.
- Watch out: A change made in an item's window shows in the phone preview only after its Save: check it then with View as.
- Done when: You pressed Save or Save changes, App Studio says “Saved”, and the phone preview shows the menu you want.
- Go deeper: [How to rename an item or change its icon](https://ajayexpop.github.io/appbuilder/build/app-menu/rename-and-icon/), [How to hide or remove an item](https://ajayexpop.github.io/appbuilder/build/app-menu/hide-or-remove/), [How to change the order of items in a section](https://ajayexpop.github.io/appbuilder/build/app-menu/reorder/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to limit who sees an item](https://ajayexpop.github.io/appbuilder/build/app-menu/limit-audience/)

### 5. In Home screen, add, hide, move or change the event's blocks.

- Who: Your move
- Picture: Blocks: what the home shows, in order, a screenshot of App Studio
- Why: Each event has its own home, and Save home screen saves every event you edited since the last save.
- Watch out: Restore the default home is saved straight away, without Save home screen.
- Watch out: A block's bin takes it off the list at once, without asking: to keep its settings, switch the block off instead.
- Watch out: The phone shows your unsaved home on sample content.
- Done when: The phone preview shows the home you want, and after Save home screen App Studio says “Content saved — live on the next app fetch”.
- Go deeper: [How to add, order, hide and remove blocks](https://ajayexpop.github.io/appbuilder/look/home/manage-blocks/), [How to edit another event's home (apps with several events)](https://ajayexpop.github.io/appbuilder/look/home/other-event/), [How to put the home back to the default](https://ajayexpop.github.io/appbuilder/look/home/restore-default/), [Home screen](https://ajayexpop.github.io/appbuilder/look/home/), [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/)

### 6. In Custom pages, change or write the event's page, and press Save page.

- Who: Your move
- On screen (drawn from App Studio's code): Discard, Save page
- Why: Each page belongs to one event, and a saved page is “Live on the next app refresh. No new build needed.”
- Watch out: If someone else, such as your ExpoPlatform team, saved the page after you opened it, your save is refused: copy your text, reload, open the page again and make the change again.
- Watch out: When you press Add to menu or add a built-in screen in Custom pages, reload any other tab showing Menu & content before you save there, or that save takes it out again.
- Watch out: Who sees it does not protect a page: “everything on a page can be read by anyone who has your app.”
- Done when: The phone preview shows your page, and the save bar reads “Live on the next app refresh. No new build needed.”
- Go deeper: [How to write a page of your own](https://ajayexpop.github.io/appbuilder/look/pages/write-a-page/), [How to put a saved page in the menu](https://ajayexpop.github.io/appbuilder/look/pages/add-a-page-to-the-menu/), [How to change a page made before App Studio](https://ajayexpop.github.io/appbuilder/look/pages/edit-an-event-page/), [Custom pages](https://ajayexpop.github.io/appbuilder/look/pages/), [How to write a page in several languages](https://ajayexpop.github.io/appbuilder/look/pages/write-in-other-languages/), [How to add a built-in screen to the menu](https://ajayexpop.github.io/appbuilder/look/pages/add-a-built-in-screen/), [How to show a block only to guests or only to signed-in people](https://ajayexpop.github.io/appbuilder/look/pages/limit-a-block/)

### 7. In Translations, choose the language, find the text, type your wording and press the save button.

- Who: Your move
- On screen: “Change any text the app shows, in each language. Leave a field empty to keep the standard text. No new build is needed.”
- Why: Installed apps pick up saved texts within about 30 minutes, with no new build; Translations has no phone preview.
- Watch out: Your wording applies to every event of the app, not to one event.
- Watch out: Menu names and the sign-in and registration button texts are not here: change them per event in Menu & content and Sign-in & registration.
- Watch out: To undo your wording, empty the field or press the arrow beside it, and save.
- Done when: App Studio says “Saved. Installed apps pick the texts up within about 30 minutes.”
- Go deeper: [How to change a text the app shows](https://ajayexpop.github.io/appbuilder/look/translations/change-a-text/), [How to go back to the standard text](https://ajayexpop.github.io/appbuilder/look/translations/back-to-standard/), [How to work on another language](https://ajayexpop.github.io/appbuilder/look/translations/another-language/), [Translations](https://ajayexpop.github.io/appbuilder/look/translations/), [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/)

## Stage 4: When phones show it

Installed apps show a saved change the next time they refresh, with no new build; only a few settings wait for a new version.

Sources: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/).

### 8. Check the change in the app on a phone: it shows at the next refresh, and texts within about 30 minutes.

- Who: Your move
- On screen: **Saved** “Changes reach the app the next time it refreshes.”
- Why: The app checks for new texts when it opens, when it comes back to the foreground and every 5 minutes while open, at most once every 30 minutes.
- Watch out: A change to the menu, the home's blocks or a page shows only in the event you saved it for; your wording in Translations shows in every event.
- Watch out: A picture or video you upload is stored at once, but the app uses it only after you save.
- Watch out: Your old apps never show what you save in Menu & content, Sign-in & registration or Events & updates: check every change on a phone with a build of this app, a test build from Build & test first.
- Done when: A phone with a build of this app shows your change.
- Go deeper: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/), [How to change a text the app shows](https://ajayexpop.github.io/appbuilder/look/translations/change-a-text/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [Glossary](https://ajayexpop.github.io/appbuilder/help/glossary/)

### 9. For the icon, the splash picture or colour, or a widget switch, build a new version in Build & test.

- Who: Your move
- Picture: The Build & test button at the top of every page of your app, a screenshot of App Studio
- Why: Phones show these only after the next build is installed: a test build first, then a store release from Publish.
- Watch out: In store builds, the name under the icon is the store name, not App name in the app, so a new build does not change it: ask your ExpoPlatform contact.
- Watch out: After the stores' review, a later version waits for your ExpoPlatform team to start the rollout (on Android, after a first 5%): ask your ExpoPlatform contact.
- Watch out: Whether people with an older version are asked, or made, to update is set by your ExpoPlatform team: ask your ExpoPlatform contact.
- Done when: Each new build ends Ready and reads Store-signed; if a ready build is not Store-signed, ask your ExpoPlatform contact to add your app's store key.
- Step by step: [Release a new version](update.md)
- Go deeper: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [How to install a test build on your phone](https://ajayexpop.github.io/appbuilder/release/builds/install-a-test-build/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to change the app's name in the app](https://ajayexpop.github.io/appbuilder/build/app-identity/change-name/), [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/)

## Something's wrong?

- **App Studio says “Your session has expired - reopen App Studio from your admin” or “Reopen App Studio from your admin”.** Why: Your App Studio session has ended, or could not start, and a save refused for that reason is not carried out. What to do: Open App Studio again from your ExpoPlatform admin, then make the change again and save it. See: [Open App Studio](https://ajayexpop.github.io/appbuilder/start/open/).
- **My changes disappeared when I picked another event or language.** Why: In Menu & content, Sign-in & registration and Events & updates, switching the event or the language drops unsaved changes without asking. What to do: Make the changes again, and save before you switch. See: [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/).
- **A renamed menu item keeps its old name in another language.** Why: Item names are kept per language, and you renamed it in one. What to do: Pick each language in Language of the texts, rename the item there too, and save before you switch. See: [How to rename an item or change its icon](https://ajayexpop.github.io/appbuilder/build/app-menu/rename-and-icon/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/).
- **Saving the menu says “Every menu item needs a name”.** Why: An item has no name, for example a page from Custom pages that Menu & content shows as “Page title”, so the menu was not saved. What to do: Press Edit on that item, give it a name, and save again. See: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [How to add a feature, a custom page or a documents page to a section](https://ajayexpop.github.io/appbuilder/build/app-menu/add-item/), [How to rename an item or change its icon](https://ajayexpop.github.io/appbuilder/build/app-menu/rename-and-icon/).
- **The phone preview says “Live preview crashed” or “The app's config could not be loaded…”** Why: The app inside the preview stopped with an error, or the event server is not answering, so the preview cannot start. What to do: For “Live preview crashed”, press Retry; for the second message, try again in a minute. See: [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/).
- **Saving a page says “This page was changed by someone else — reload it before saving”.** Why: Someone else, such as your ExpoPlatform team, saved the page after you opened it. What to do: Copy any text you want to keep, reload the page, open your page again and make your changes again. See: [How to write a page of your own](https://ajayexpop.github.io/appbuilder/look/pages/write-a-page/), [Custom pages](https://ajayexpop.github.io/appbuilder/look/pages/).
- **The text I want to change is not in Translations.** Why: Menu names and the sign-in and registration button texts are worded per event, in Menu & content and Sign-in & registration. What to do: Change them there; for any other text, search with other words or with the text's key. See: [Translations](https://ajayexpop.github.io/appbuilder/look/translations/), [How to change a text the app shows](https://ajayexpop.github.io/appbuilder/look/translations/change-a-text/).
- **My change does not show on phones yet.** Why: A saved change shows at the next refresh, and a text within about 30 minutes, on a phone with a build of this app; a change you have not saved never reaches it, and your old apps never show what you save in Menu & content, Sign-in & registration or Events & updates. What to do: Check that the section shows your change for the right event and language, that you saved it, and that the phone has a build of this app; for a text, allow about 30 minutes. See: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [Glossary](https://ajayexpop.github.io/appbuilder/help/glossary/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/).
- **My new icon, name, splash picture or widget does not show on phones.** Why: They reach phones only with a new build, and so does switching a widget on or off; in store builds, the name under the icon is the store name, not App name in the app. What to do: For the icon, the splash picture and its colour or a widget switch, make a new build, install it and publish it; for the name in store builds, ask your ExpoPlatform contact. See: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to change the app's name in the app](https://ajayexpop.github.io/appbuilder/build/app-identity/change-name/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/).
