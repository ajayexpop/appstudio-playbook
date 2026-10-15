# Launch your event app

From a new app to people downloading it from the App Store and Google Play.

**The result:** Your event's own app is in the App Store and Google Play, with your name, icon, look and content, and you tried it on real phones first.

Sources: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [Add a new app](https://ajayexpop.github.io/appbuilder/start/new-app/).

_App Studio Playbook v1.0.0, built from the App Studio guide v1.0.1, checked against App Studio bea65df on 14 Oct 2026. Each step links to the App Studio guide pages it comes from._

## Who does what

- **Your move**: You build the app in App Studio, test it, write the store listing and ask to publish.
- **Our team is on it**: Your ExpoPlatform team sets the app up in the App Store and Google Play, approves your request to publish (they do by default) and starts the rollout.
- **The store is on it**: Apple and Google review each release before people can download it.

Sources: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/).

## Before you start, have ready

- Your event or events in your ExpoPlatform admin. For an app with several events, give them an event tag.
- The app icon: a PNG or JPEG of up to 10 MB. App Studio advises a square picture of at least 1024 × 1024 with no transparency.
- Your colours and fonts, and a splash picture if you want one.
- The store texts for each language: the app name and its descriptions.
- A demo login for the store reviewers, on a demo event with at least 3 sessions.
- Your testers: email addresses for TestFlight, Google Group addresses for Google Play.

Sources: [Add a new app](https://ajayexpop.github.io/appbuilder/start/new-app/), [How to change the app icon](https://ajayexpop.github.io/appbuilder/build/app-identity/change-icon/), [Colours & fonts](https://ajayexpop.github.io/appbuilder/look/design/), [How to set up the splash screen](https://ajayexpop.github.io/appbuilder/build/app-identity/set-splash/), [How to write the store texts for a language](https://ajayexpop.github.io/appbuilder/release/publish/write-store-texts/), [How to give the store reviewers a demo account](https://ajayexpop.github.io/appbuilder/release/publish/add-demo-account/), [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/).

## Plan from your event date

Enter your event date, and the plan works back to the working day each step should be done by. The days are allowances you can change, and your ExpoPlatform team confirms the dates of their own steps. Working days are Monday to Friday: public holidays are not counted.

The days the plan allows, which you can change:

- Days the app should be in the stores before the event: 14 days. Your assumption: time for people to find and download the app before the event.
- Days allowed for the stores' review: 7 days. Your allowance, based on the stores' published figures: Apple is “typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours”; for certain developer accounts, Google Play's review can take “up to seven days or longer in exceptional cases”. ([Apple: App Review](https://developer.apple.com/distribute/app-review/), read 14 Oct 2026; [Google Play Console Help: Publish your app](https://support.google.com/googleplay/android-developer/answer/9859751), read 14 Oct 2026)
- Working days allowed for ExpoPlatform's approval: 2 days. Your assumption: there is no published time, and your ExpoPlatform team confirms the date.
- Days of testing on real phones: 5 days. Your assumption: the plan adds a day before testing for Apple to check a TestFlight build, “usually within a day”.

The plan, in order, worked back from the date you enter (your event starts on):

- Create the app (Your move): now. It starts your ExpoPlatform team's store set-up, which the builds, testers, store listing and store screenshots wait for.
- Store set-up done (Our team is on it): the date of the first test builds. Your plan needs it by then, and your ExpoPlatform team confirms the date.
- Look and content ready, icon and splash picture settled (Your move): the date of the first test builds. The icon and the splash picture and its colour reach phones only with a build.
- First test builds sent to testers (Your move): the ask date, less the testing days and one day, on a working day.
- Store listing, store screenshots and demo account ready (Your move): the ask date. A release is sent for review on its own, unless Store review still has something to sort out.
- Ask ExpoPlatform to publish (Your move): the approval date, less the approval's working days.
- ExpoPlatform approves the request (Our team is on it): the start of the stores' review. Your listing and builds then go to the stores, and your ExpoPlatform team confirms the date.
- The stores review the builds (The store is on it): the in-the-stores date, less the review days, on a working day. If a store turns the release down, a new release goes through ExpoPlatform's approval and the store's review again.
- Your ExpoPlatform team starts the rollout (Our team is on it): the in-the-stores date. Apple releases an app's first iPhone version on approval, and Android's first 5% stage goes out by itself; Android beyond 5% waits for your ExpoPlatform team, who confirm the date.
- App in the stores: the event, less the days in the stores, on a working day.
- Your event: the event.

Sources: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/), [Add a new app](https://ajayexpop.github.io/appbuilder/start/new-app/), [How to check what is left before the app can go to the stores](https://ajayexpop.github.io/appbuilder/release/publish/check-what-is-left/), [How to add or remove testers](https://ajayexpop.github.io/appbuilder/release/builds/manage-testers/), [How to take store screenshots of your app](https://ajayexpop.github.io/appbuilder/release/screenshots/take-store-screenshots/), [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/).

## Stage 1: Start the app

Create the app first: it starts your ExpoPlatform team's store set-up. While they work on it, do stage 2; the store listing, builds and testers wait until the set-up is done.

Sources: [How to check what is left before the app can go to the stores](https://ajayexpop.github.io/appbuilder/release/publish/check-what-is-left/), [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/), [How to add or remove testers](https://ajayexpop.github.io/appbuilder/release/builds/manage-testers/).

### 1. Open App Studio from your ExpoPlatform admin.

- Who: Your move
- Picture: Your apps, the page App Studio opens on, a screenshot of App Studio
- Why: App Studio opens inside your admin, on Your apps.
- Watch out: If App Studio shows “Your session has expired - reopen App Studio from your admin”, open it again from your admin, then check and save again any change you were saving.
- Done when: You see Your apps.
- Go deeper: [Open App Studio](https://ajayexpop.github.io/appbuilder/start/open/), [Your apps](https://ajayexpop.github.io/appbuilder/start/your-apps/)

### 2. Press New app, name the app, choose its events and press Create.

- Who: Your move
- Picture: The New app button on Your apps, a screenshot of App Studio
- Why: “It starts as a draft: nothing reaches the stores until you build and publish it.”
- Watch out: Several events works by event tag: if no event has one, tag your events in your admin, or choose One event.
- Watch out: Start from can copy the look and home-screen widget settings of an app you already have.
- Done when: The new app opens on its Overview.
- Go deeper: [Add a new app](https://ajayexpop.github.io/appbuilder/start/new-app/), [Events & updates](https://ajayexpop.github.io/appbuilder/build/app-general/)

### 3. Your ExpoPlatform team sets the app up in the App Store and Google Play.

- Who: Our team is on it
- On screen: **Not in the stores yet** “ExpoPlatform is setting this app up in the App Store and Google Play - you can build it once that is done”
- Why: Creating the app sends them a set-up request; they approve it and choose the store account the app is published under.
- Watch out: Until it is done, both build buttons are greyed out: wait, and ask your ExpoPlatform contact if you need to know where it stands.
- Watch out: If they decline, App Studio says “ExpoPlatform did not set this app up in the stores”: ask your ExpoPlatform contact.
- Done when: Publish shows its tabs: Overview, Store listing, Releases and Rollout.
- Go deeper: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to check what is left before the app can go to the stores](https://ajayexpop.github.io/appbuilder/release/publish/check-what-is-left/), [Add a new app](https://ajayexpop.github.io/appbuilder/start/new-app/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/)

## Stage 2: Make it your event's app

You can do all of this while the store set-up runs. Settle the icon and the splash picture early: they reach phones only with a new build. Sign-in, the menu and the look each have a journey of their own, linked from their step.

Sources: [How to check what is left before the app can go to the stores](https://ajayexpop.github.io/appbuilder/release/publish/check-what-is-left/), [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/), [How to add or remove testers](https://ajayexpop.github.io/appbuilder/release/builds/manage-testers/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/).

### 4. Set the app icon and the splash in Name, icon & splash, and press Save changes.

- Who: Your move
- Picture: Name, icon & splash, a screenshot of App Studio
- Why: The icon, the name under it, and the splash picture and its colour are built into each build of the app.
- Watch out: The save bar says changes reach the app at the next refresh, but phones show these only once a new build is installed.
- Watch out: In store builds, the name under the icon is the app's store name, not App name in the app.
- Done when: Your icon shows in Name, icon & splash after you save.
- Go deeper: [Name, icon & splash](https://ajayexpop.github.io/appbuilder/build/app-identity/), [How to change the app icon](https://ajayexpop.github.io/appbuilder/build/app-identity/change-icon/), [How to set up the splash screen](https://ajayexpop.github.io/appbuilder/build/app-identity/set-splash/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to change the app's name in the app](https://ajayexpop.github.io/appbuilder/build/app-identity/change-name/)

### 5. Choose how people sign in to each event, and whether new visitors can register.

- Who: Your move
- On screen (drawn from App Studio's code): Sign-in, When people must sign in, Sign-in button, Scan-to-sign-in button, Show the event's name on the sign-in screen
- Done when: You pressed Save changes in Sign-in & registration.
- Step by step: [Let people sign in and register](sign-in.md)
- Go deeper: [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/), [How to choose how people sign in to an event](https://ajayexpop.github.io/appbuilder/build/app-sign-in/choose-sign-in-mode/), [How to let new visitors register from the sign-in screen](https://ajayexpop.github.io/appbuilder/build/app-sign-in/add-register-button/)

### 6. Build the menu: add the features and pages people need, section by section.

- Who: Your move
- On screen (drawn from App Studio's code): Section header, Bottom bar, Add to this section, Edit, Remove from the menu, Add
- Watch out: Menu & content shows one event and one language at a time, and switching drops unsaved changes without asking: save first.
- Done when: The phone preview shows the menu you want, and you pressed Save changes.
- Step by step: [Build the menu and content](menu.md)
- Go deeper: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [How to add a feature, a custom page or a documents page to a section](https://ajayexpop.github.io/appbuilder/build/app-menu/add-item/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/)

### 7. Set each event's brand colours, light and dark, and its fonts in Colours & fonts.

- Who: Your move
- Picture: Colours & fonts, a screenshot of App Studio
- Done when: You pressed Save changes, and the phone preview shows your colours in light and dark.
- Step by step: [Make the app look like your event](look.md)
- Go deeper: [Colours & fonts](https://ajayexpop.github.io/appbuilder/look/design/), [How to set the dark-mode colours](https://ajayexpop.github.io/appbuilder/look/design/set-dark-colours/)

### 8. In Home screen, switch Designed home screen on, then design each event's home screen.

- Who: Your move
- Picture: Designed home screen, at the top of Home screen, a screenshot of App Studio
- Why: Colours, the home screen, the menu and pages reach installed apps at their next refresh: you can keep improving them after launch, with no new build.
- Watch out: A new app starts with Designed home screen off, unless it was copied from an app where it is on.
- Done when: Designed home screen is on, the phone preview shows the home screen you want, and you saved it.
- Step by step: [Make the app look like your event](look.md)
- Go deeper: [Home screen](https://ajayexpop.github.io/appbuilder/look/home/), [How to edit another event's home (apps with several events)](https://ajayexpop.github.io/appbuilder/look/home/other-event/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to turn the designed home screen on or off](https://ajayexpop.github.io/appbuilder/look/home/designed-home-on-off/)

## Stage 3: Try it on real phones

Test builds go to your testers with no approval from ExpoPlatform.

Sources: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/).

### 9. Open Build & test and press Build for iOS, then Build for Android.

- Who: Your move
- Picture: The Build & test button at the top of every page of your app, a screenshot of App Studio
- Why: You can leave the page while a build runs, and an iOS and an Android build can run at the same time.
- Watch out: For Android, keep App Bundle (AAB): Google Play accepts only an App Bundle.
- Watch out: If a build runs for a long time, an amber note says it “may have stopped without telling us”: stop it and start a new one.
- Done when: Each build ends Ready and reads Store-signed; if a ready build is not Store-signed, ask your ExpoPlatform contact to add your app's store key.
- Go deeper: [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/), [How to follow a build, and stop it](https://ajayexpop.github.io/appbuilder/release/builds/follow-or-stop/), [How to install a test build on your phone](https://ajayexpop.github.io/appbuilder/release/builds/install-a-test-build/), [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/)

### 10. Under Send to testers, send each build to TestFlight (iPhone) or Google Play internal testing (Android).

- Who: Your move
- On screen (drawn from App Studio's code): Where should the build go? (TestFlight), Add testers, Build, Send
- Why: Apple checks a TestFlight build first, “usually within a day”, while Google Play internal testing is ready “within minutes, with no review”.
- Watch out: Each platform takes one release at a time, store releases included: wait for one send to finish before the next.
- Watch out: An amber Staged on Play badge means the Android release waits as a draft in Google Play Console until it is published there: ask your ExpoPlatform contact.
- Done when: Your testers have the app: on iPhone, the send shows Live on TestFlight.
- Go deeper: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/), [How to add or remove testers](https://ajayexpop.github.io/appbuilder/release/builds/manage-testers/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/)

### 11. Install the test build from TestFlight or Google Play, or from its install link, and try every screen.

- Who: Your move
- On screen: **Live on TestFlight**
- Why: App Studio's own advice: “Try the build on real phones before it goes to the store.”
- Done when: You and your testers are happy with the app.
- Go deeper: [How to install a test build on your phone](https://ajayexpop.github.io/appbuilder/release/builds/install-a-test-build/), [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [Build & test](https://ajayexpop.github.io/appbuilder/release/builds/)

## Stage 4: Prepare the store listing

Your store listing is your app's page in both stores. Nothing you save here goes to the stores until ExpoPlatform approves your request to publish.

Sources: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [Publish](https://ajayexpop.github.io/appbuilder/release/publish/).

### 12. In Publish, on Store listing, write the texts for each language and save each one.

- Who: Your move
- On screen (drawn from App Studio's code): Add a language, App name, Short description, Description, What's new, Save English
- Watch out: A screenshot capture takes one pass per language of your store listing, or English when it has none: add your languages first.
- Done when: Every language you need is saved.
- Go deeper: [How to write the store texts for a language](https://ajayexpop.github.io/appbuilder/release/publish/write-store-texts/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to take store screenshots of your app](https://ajayexpop.github.io/appbuilder/release/screenshots/take-store-screenshots/)

### 13. In Store screenshots, take the screenshots, make store artwork in Store studio, and attach it to your listing.

- Who: Your move
- On screen (drawn from App Studio's code): Listing language, Attach to the store listing
- Watch out: When the app has no screenshot build for that store yet, Take screenshots builds the app first, so it too waits for the store set-up.
- Watch out: Your Store studio set is held only in the page: attach it before you leave or reload the page.
- Done when: See them in Publish shows the pictures on your listing.
- Go deeper: [How to take store screenshots of your app](https://ajayexpop.github.io/appbuilder/release/screenshots/take-store-screenshots/), [How to turn your screenshots into store artwork](https://ajayexpop.github.io/appbuilder/release/screenshots/make-store-artwork/), [How to put the set on your store listing](https://ajayexpop.github.io/appbuilder/release/screenshots/attach-to-listing/)

### 14. Under Store review, give the store reviewers a demo account, and press Save demo account.

- Who: Your move
- On screen (drawn from App Studio's code): Demo login, Demo password, Demo event number, Notes for the reviewers, Save demo account
- Why: The store reviewers sign in to your app with it, and it is the only set-up step that is yours.
- Watch out: Without it, the iPhone submission fails and the release stays Ready.
- Watch out: Pick a demo event with real sessions and exhibitors: the review check looks for at least 3 sessions on its agenda.
- Watch out: Notes for the reviewers are kept in App Studio, but not sent with your submissions.
- Done when: App Studio says “Demo account saved”.
- Go deeper: [How to give the store reviewers a demo account](https://ajayexpop.github.io/appbuilder/release/publish/add-demo-account/), [Publish](https://ajayexpop.github.io/appbuilder/release/publish/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/)

### 15. Open Publish and read each store's card and What now.

- Who: Your move
- On screen: the Google Play card, “3 of 6 steps done”: Set up Done, Build Done, Test Done, Store listing Waiting, Publish Not yet, Live Not yet. What now (Our team is on it): “Your listing goes to Google Play with your publication”, “ExpoPlatform sends it when they approve your request to publish.”, with the button **Open releases**.
- Why: Each store card shows six steps (Set up, Build, Test, Store listing, Publish and Live) and who acts next: Your move, Our team is on it or The store is on it.
- Done when: Set up, Build and Test read Done on both store cards, and Store listing reads Done or, before the app's first release, What now says “Your listing goes to [store] with your publication”.
- Go deeper: [How to check what is left before the app can go to the stores](https://ajayexpop.github.io/appbuilder/release/publish/check-what-is-left/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/)

## Stage 5: Go to the stores

One request sends both stores their build. ExpoPlatform approves it, the stores review it, and the app rolls out.

Sources: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/).

### 16. On Releases, press Submit to the stores, keep each store's newest build, and press Submit.

- Who: Your move
- On screen (drawn from App Studio's code): App Store (ticked), Build, Google Play (ticked), Build, Close, Submit
- Watch out: One request can wait at a time: Submit to the stores is greyed out until ExpoPlatform decides.
- Done when: App Studio says “Sent to ExpoPlatform for approval”, or “Sent to the stores” for an app that needs no approval.
- Go deeper: [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/)

### 17. Your ExpoPlatform team approves the request.

- Who: Our team is on it
- On screen: “Waiting for ExpoPlatform approval: App Store [version], Google Play [version], sent [when].”
- Why: When they approve, your store listing goes to the stores and each build goes to its store's review.
- Watch out: A declined request reads “Declined: [reason]”, or “Declined: no reason given”: sort out what the reason names and submit again, or ask your ExpoPlatform contact when no reason is given.
- Done when: Releases says “Approved [when]: [the builds] went to the stores' review. Follow it below.”
- Go deeper: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

### 18. Apple and Google review the release. Follow it on Releases.

- Who: The store is on it
- A store release's statuses: Draft, Uploading, Processing, Ready, Submitted, In review, Approved, Rolling out, Live.
- Why: Apple typically reviews 90% of submissions in less than 48 hours; for certain developer accounts, Google Play's review can take up to seven days, or longer in exceptional cases. (Sources: [Apple: App Review](https://developer.apple.com/distribute/app-review/), read 14 Oct 2026; [Google Play Console Help: Publish your app](https://support.google.com/googleplay/android-developer/answer/9859751), read 14 Oct 2026)
- Watch out: If a store turns the release down, its card shows the store's message when it gave one, and a new release goes through Submit to the stores and ExpoPlatform's approval again.
- Watch out: If your event is close and the iPhone version is still in review, your ExpoPlatform team can ask Apple to expedite the review, and Apple decides. (Source: [Apple: App Review](https://developer.apple.com/distribute/app-review/), read 14 Oct 2026)
- Done when: The release reads Approved.
- Go deeper: [How to follow a release through the store's review](https://ajayexpop.github.io/appbuilder/release/publish/follow-review/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [Publish](https://ajayexpop.github.io/appbuilder/release/publish/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

### 19. The app rolls out to people.

- Who: Our team is on it
- On screen: **Rolling out** “The rollout moves on only while the app stays healthy.”
- Why: Apple releases an app's first iPhone version on approval, and Android's first 5% stage goes out by itself; the rest waits for your ExpoPlatform team, who start the rollout.
- Watch out: The Overview can still read Not in the stores yet when people can already download the app: Your apps shows the live version.
- Done when: The release reads Live.
- Go deeper: [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [Your app's Overview](https://ajayexpop.github.io/appbuilder/start/overview/)

## Stage 6: After launch

Most changes reach installed apps without a new version.

Sources: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/).

### 20. Keep improving the app: save, and installed apps pick it up.

- Who: Your move
- No new build: Colours, home screen, menu and pages: at the next refresh; Sign-in settings: at the next refresh; Texts in Translations: within about 30 minutes.
- Needs a new build and store release: The app icon; The name under the icon (in store builds, the store name); The splash picture and its colour; Switching a home-screen widget on or off.
- Done when: You know which changes need a new version.
- Go deeper: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/)

## Something's wrong?

- **The build buttons are greyed out.** Why: ExpoPlatform has not finished setting the app up in the stores, or did not set it up. What to do: Read the note above the list: while the set-up runs, wait, and ask your ExpoPlatform contact if you need to know where it stands; if it says “ExpoPlatform did not set this app up in the stores”, ask your ExpoPlatform contact. See: [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/).
- **Publish says “Not in the stores yet”.** Why: The store set-up is not finished. What to do: Read the line under it: while your request waits, wait until the set-up is done; once ExpoPlatform is putting your app in the stores, ask your ExpoPlatform contact if this takes longer than a working day; if they did not set it up, ask your ExpoPlatform contact. See: [How to check what is left before the app can go to the stores](https://ajayexpop.github.io/appbuilder/release/publish/check-what-is-left/).
- **My new icon, name, splash picture or widget does not show on phones.** Why: They reach phones only with a new build, and so does switching a widget on or off; in store builds, the name under the icon is the store name, not App name in the app. What to do: For the icon, the splash picture and its colour or a widget switch, make a new build, install it and publish it; for the name in store builds, ask your ExpoPlatform contact. See: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to change the app's name in the app](https://ajayexpop.github.io/appbuilder/build/app-identity/change-name/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/).
- **The phone preview does not open on my designed home.** Why: Designed home screen is off (“When off, the app opens on its first menu screen and this design is not used.”), or the Preview strip below the form starts the preview on My Badge or Boot flow. What to do: Switch Designed home screen on and press Save home screen, or choose Home in the Preview strip. See: [How to turn the designed home screen on or off](https://ajayexpop.github.io/appbuilder/look/home/designed-home-on-off/), [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/).
- **A build has been running for a long time.** Why: It may have stopped: an amber note on its card says so. What to do: Stop it and start a new one. If your builds keep failing, ask your ExpoPlatform contact. See: [How to follow a build, and stop it](https://ajayexpop.github.io/appbuilder/release/builds/follow-or-stop/).
- **A choice in Send to testers is greyed out.** Why: The app is not in that store yet, there is no Store-signed build of that platform, another release of that platform is still moving (a store release included), or, on Android, an earlier release waits as a draft or the newest build is already on another Google Play track. What to do: Read the reason the dialog gives and do what it says; if new builds are not Store-signed, or a release waits as a draft in Google Play Console, ask your ExpoPlatform contact; while another release is still moving, wait until it has finished. See: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/).
- **Submit to the stores is greyed out.** Why: A request is already waiting for ExpoPlatform. What to do: Wait for their decision; it shows on Releases. See: [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/).
- **A release is stuck at Ready.** Why: Store review still has something to sort out, such as a missing demo account, a demo account the check cannot sign in with, or a demo event that looks empty. What to do: Open Store review in Publish and fix each item marked Your move; items marked Our team are your ExpoPlatform team's. See: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to give the store reviewers a demo account](https://ajayexpop.github.io/appbuilder/release/publish/add-demo-account/).
- **A store turned the release down.** Why: The store found a problem; its card shows the store's message when it gave one. What to do: Fix it, build again if needed, and ask again with Submit to the stores: the new release goes through ExpoPlatform's approval and the store's review again. See: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to follow a release through the store's review](https://ajayexpop.github.io/appbuilder/release/publish/follow-review/).
- **The Overview says “Not in the stores yet”, but people can download the app.** Why: The Overview counts a store as live only from App Studio's own store record. What to do: Check the live version on Your apps. See: [Your app's Overview](https://ajayexpop.github.io/appbuilder/start/overview/).

## Facts from outside App Studio

- [Apple: App Review](https://developer.apple.com/distribute/app-review/), read 14 Oct 2026: "App Review works around the clock, typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours. … if your app is still in review and the launch of your event is quickly approaching, you can request to have your app review expedited."
- [Google Play Console Help: Publish your app](https://support.google.com/googleplay/android-developer/answer/9859751), read 14 Oct 2026: "For certain developer accounts, we'll take more time to thoroughly review your app to help better protect users. This may result in review times of up to seven days or longer in exceptional cases."
