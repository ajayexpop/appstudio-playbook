# Release a new version

From changes that need a new build to people getting the new version, for an app already in the stores.

**The result:** A new version of your app, tried on real phones first, has passed the stores' review and is rolling out to people.

Sources: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/).

_App Studio Playbook v1.0.1, built from the App Studio guide v1.1.0, checked against App Studio c1421d4 on 14 Oct 2026. Each step links to the App Studio guide pages it comes from._

## Who does what

- **Your move**: You make and save the changes, build and test the new version, and ask to publish.
- **Our team is on it**: Your ExpoPlatform team approves your request to publish (they do by default), starts the rollout and sets the update prompts.
- **The store is on it**: Apple and Google review each release before people can download it.

Sources: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/).

## Before you start, have ready

- What you want the stores to show as What's new: App Studio does not send it to either store, so ask your ExpoPlatform contact.
- Your testers: TestFlight needs at least one, and Google Play testers are Google Groups.
- A demo account the store reviewers can sign in with, on a demo event with at least 3 sessions on its agenda.

Sources: [How to write the store texts for a language](https://ajayexpop.github.io/appbuilder/release/publish/write-store-texts/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/), [How to add or remove testers](https://ajayexpop.github.io/appbuilder/release/builds/manage-testers/), [How to give the store reviewers a demo account](https://ajayexpop.github.io/appbuilder/release/publish/add-demo-account/).

## Plan from the date the new version should reach people

Enter the date the new version should reach people, and the plan works back to the working day each step should be done by. The days are allowances you can change, and your ExpoPlatform team confirms the dates of their own steps. Working days are Monday to Friday: public holidays are not counted.

The days the plan allows, which you can change:

- Days allowed for the stores' review: 7 days. Your allowance, based on the stores' published figures: Apple is “typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours”; for certain developer accounts, Google Play's review can take “up to seven days or longer in exceptional cases”. ([Apple: App Review](https://developer.apple.com/distribute/app-review/), read 14 Oct 2026; [Google Play Console Help: Publish your app](https://support.google.com/googleplay/android-developer/answer/9859751), read 14 Oct 2026)
- Working days allowed for ExpoPlatform's approval: 2 days. Your assumption: there is no published time, and your ExpoPlatform team confirms the date.
- Days of testing on real phones: 5 days. Your assumption: the plan adds a day before testing for Apple to check a TestFlight build, “usually within a day”.

The plan, in order, worked back from the date you enter (the new version should reach people by):

- Changes for the new version saved (Your move): the date of the new test builds. What is built into the app comes from your app's settings at the time of the build.
- New builds sent to your testers (Your move): the ask date, less the testing days and one day, on a working day. Each platform takes one release at a time, test and store releases alike.
- The review check clear (Your move): the ask date. A release waits at Ready while Store review has something to sort out.
- Ask ExpoPlatform to publish (Your move): the approval date, less the approval's working days. Let each send to your testers finish first.
- ExpoPlatform approves the request (Our team is on it): the start of the stores' review. Each build then goes on to its store's review, and your ExpoPlatform team confirms the date.
- The stores review the new version (The store is on it): the rollout date, less the review days, on a working day. If a store turns the release down, a new release goes through ExpoPlatform's approval and the store's review again.
- Your ExpoPlatform team starts the rollout (Our team is on it): the date you enter, on a working day. Later iPhone versions, and Android beyond its first 5% stage, wait for this step, and your ExpoPlatform team confirms the date.
- The new version reaches people: the date you enter.

Sources: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [How to follow a release through the store's review](https://ajayexpop.github.io/appbuilder/release/publish/follow-review/), [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/).

## Stage 1: Decide what needs a new version

Most changes you save reach installed apps by themselves, the next time the app refreshes. What is built into the app reaches phones only with a new version.

Sources: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/).

### 1. Check whether your changes need a new version, or reach installed apps by themselves.

- Who: Your move
- Reaches installed apps by itself: Colours & fonts, Home screen, Menu & content and Custom pages: at the next refresh; Sign-in & registration: at the next refresh; Texts in Translations: within about 30 minutes; Your choice of events in Events & updates: no new build; What a home-screen widget shows: no new build; Play & Win: no new build.
- Needs a new build and store release: The app icon; The name under the icon (in store builds, the store name); The splash picture and its colour; Switching a home-screen widget on or off.
- Why: Phones show a change to what is built into the app only after the next build is installed: a test build first, then a store release.
- Done when: You know which of your changes need a new version.
- Go deeper: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/)

### 2. Make and save every change the new version should carry, before you build.

- Who: Your move
- Picture: Name, icon & splash, a screenshot of App Studio
- Why: A build takes the icon and the splash picture and its colour from your app's settings at the time it is made.
- Watch out: A home-screen widget's switch saves at once, with no save button, and switching it on or off reaches phones with your next build.
- Watch out: In store builds, the name under the icon is the app's store name, not App name in the app: ask your ExpoPlatform contact about the store name.
- Done when: Every change the new version should carry is saved.
- Go deeper: [Name, icon & splash](https://ajayexpop.github.io/appbuilder/build/app-identity/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/), [How to change the app's name in the app](https://ajayexpop.github.io/appbuilder/build/app-identity/change-name/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

## Stage 2: Build and test the new version

Test builds go to your testers with no approval from ExpoPlatform. Each platform takes one release at a time, test and store releases alike.

Sources: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/).

### 3. In Build & test, press Build for iOS, then Build for Android.

- Who: Your move
- Picture: The Build & test button at the top of every page of your app, a screenshot of App Studio
- Why: Each build is made from the app code ExpoPlatform deploys, with your app's settings at the time of the build.
- Watch out: For Android, keep App Bundle (AAB): Google Play accepts only an App Bundle.
- Done when: Each build ends Ready and reads Store-signed; if a ready build is not Store-signed, ask your ExpoPlatform contact to add your app's store key.
- Go deeper: [How to build the app for a phone](https://ajayexpop.github.io/appbuilder/release/builds/start-a-build/), [How to follow a build, and stop it](https://ajayexpop.github.io/appbuilder/release/builds/follow-or-stop/), [How to install a test build on your phone](https://ajayexpop.github.io/appbuilder/release/builds/install-a-test-build/), [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/)

### 4. Under Send to testers, send each new build to your testers, and try it on real phones.

- Who: Your move
- On screen (drawn from App Studio's code): Where should the build go? (TestFlight), Add testers, Build, Send
- Why: Sending needs no approval from ExpoPlatform, and on TestFlight “Apple checks the build first, usually within a day.”
- Watch out: Each platform takes one release at a time, store releases included: while your last version of a platform is still moving, you cannot send a build of that platform.
- Watch out: An amber Staged on Play badge means the Android release waits as a draft in Google Play Console until it is published there: ask your ExpoPlatform contact.
- Watch out: With a demo account saved in Publish, a TestFlight send first checks that its demo event is ready for review.
- Done when: You and your testers have tried the new version: on iPhone, the send shows Live on TestFlight.
- Go deeper: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/), [How to install a test build on your phone](https://ajayexpop.github.io/appbuilder/release/builds/install-a-test-build/), [How to add or remove testers](https://ajayexpop.github.io/appbuilder/release/builds/manage-testers/), [How to give the store reviewers a demo account](https://ajayexpop.github.io/appbuilder/release/publish/add-demo-account/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/)

## Stage 3: Get ready for the stores

The store listing is your app's page in the stores: one listing for both stores, with its texts in each language, though not all of it reaches each store with a new version. A release at Ready is sent for review on its own, unless Store review still has something to sort out.

Sources: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to write the store texts for a language](https://ajayexpop.github.io/appbuilder/release/publish/write-store-texts/).

### 5. Ask your ExpoPlatform contact what each store will show as What's new for this version.

- Who: Your move
- Google Play, with a new version: Your new pictures; Not your texts; Not your What's new: a standard note instead.
- A later App Store version: App name, Short description and Privacy policy link; Not your What's new, your other texts or your new pictures.
- Why: App Studio does not send your What's new to either store: a Google Play release made from your request carries a standard note, “This update contains performance and stability updates.”
- Watch out: Copy, under For the store's “What's new” in a build's Details, only copies the lines: nothing is saved or sent to the stores.
- Done when: You know what each store will show as What's new for this version.
- Go deeper: [How to write the store texts for a language](https://ajayexpop.github.io/appbuilder/release/publish/write-store-texts/), [How to see what changed in a build](https://ajayexpop.github.io/appbuilder/release/builds/see-changes/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

### 6. Under Store review, press Check again, and fix anything marked Your move.

- Who: Your move
- On screen (drawn from App Studio's code): Demo login, Demo password, Demo event number, Notes for the reviewers, Check again, Save demo account
- Why: Store reviewers sign in to your app with this account, and a release waits at Ready while Store review has something to sort out.
- Watch out: If it says “The demo event looks empty”, pick a demo event with at least 3 sessions on its agenda, or add sessions to it.
- Watch out: If it says “The demo event could not be checked”, check the login, the password and the event number, and save them again.
- Done when: Store review reads Ready for review.
- Go deeper: [How to give the store reviewers a demo account](https://ajayexpop.github.io/appbuilder/release/publish/add-demo-account/), [How to check what is left before the app can go to the stores](https://ajayexpop.github.io/appbuilder/release/publish/check-what-is-left/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/)

## Stage 4: Ask to publish

One request sends both stores their build. ExpoPlatform approves it, and the stores review it.

Sources: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/).

### 7. On Releases, press Submit to the stores, keep each store's newest build, and press Submit.

- Who: Your move
- On screen (drawn from App Studio's code): App Store (ticked), Build, Google Play (ticked), Build, Close, Submit
- Why: Each store with a finished build starts ticked, with its newest build chosen.
- Watch out: Let each send to your testers finish first: a request approved while a test send of the same platform is still on its way cannot start.
- Done when: App Studio says “Sent to ExpoPlatform for approval”, or “Sent to the stores” for an app that needs no approval.
- Go deeper: [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/)

### 8. Your ExpoPlatform team approves the request.

- Who: Our team is on it
- On screen: “Waiting for ExpoPlatform approval: App Store [version], Google Play [version], sent [when].”
- Why: When they approve, your store listing is sent, and each build goes on to its store's review.
- Watch out: A declined request reads “Declined: [reason]”, or “Declined: no reason given”: sort out what the reason names and submit again, or ask your ExpoPlatform contact when no reason is given.
- Done when: Releases says “Approved [when]: [the builds] went to the stores' review. Follow it below.”
- Go deeper: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [How to write the store texts for a language](https://ajayexpop.github.io/appbuilder/release/publish/write-store-texts/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

### 9. Apple and Google review the new version; follow it on Releases.

- Who: The store is on it
- A store release's statuses: Draft, Uploading, Processing, Ready, Submitted, In review, Approved, Rolling out, Live.
- Why: Apple typically reviews 90% of submissions in less than 48 hours; for certain developer accounts, Google Play's review can take up to seven days, or longer in exceptional cases. (Sources: [Apple: App Review](https://developer.apple.com/distribute/app-review/), read 14 Oct 2026; [Google Play Console Help: Publish your app](https://support.google.com/googleplay/android-developer/answer/9859751), read 14 Oct 2026)
- Watch out: If a store turns the release down, its card shows the store's message when it gave one, and a new release goes through Submit to the stores and ExpoPlatform's approval again.
- Watch out: Cancel release does not take a release out of the store's review: App Studio stops following it, and a review in progress carries on.
- Watch out: If your event is close and the iPhone version is still in review, your ExpoPlatform team can ask Apple to expedite the review, and Apple decides. (Source: [Apple: App Review](https://developer.apple.com/distribute/app-review/), read 14 Oct 2026)
- Done when: The release reads Approved.
- Go deeper: [How to follow a release through the store's review](https://ajayexpop.github.io/appbuilder/release/publish/follow-review/), [How to cancel a store release](https://ajayexpop.github.io/appbuilder/release/publish/cancel-release/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [Publish](https://ajayexpop.github.io/appbuilder/release/publish/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/)

## Stage 5: Roll it out

Once a store approves, a later iPhone version, and Android beyond its first 5% stage, wait for your ExpoPlatform team, who start the rollout.

Sources: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/).

### 10. Your ExpoPlatform team starts the rollout; follow it on Rollout.

- Who: Our team is on it
- On screen: the App Store card, “5 of 6 steps done”: Set up Done, Build Done, Test Done, Store listing Done, Publish Waiting, Live Done. What now (Our team is on it): “Approved by the store”, “The rollout starts on its own and reaches people step by step.”, with the button **Open rollout**.
- Why: Only an app's first iPhone version and Android's first 5% stage go out by themselves: later iPhone versions, and Android beyond 5%, wait for your ExpoPlatform team.
- Watch out: What now says “The rollout starts on its own and reaches people step by step.”, but for a later version that holds only for Android's first 5% stage: ask your ExpoPlatform contact.
- Watch out: If What now says “The rollout is stopped”, ExpoPlatform is looking at it: ask your ExpoPlatform contact.
- Done when: The release reads Rolling out, and Live once everyone can get this version.
- Go deeper: [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to follow a release through the store's review](https://ajayexpop.github.io/appbuilder/release/publish/follow-review/), [How to check what is left before the app can go to the stores](https://ajayexpop.github.io/appbuilder/release/publish/check-what-is-left/)

### 11. On Your apps, check which version people can download from each store.

- Who: Your move
- Picture: Your apps, with each app's store badges, a screenshot of App Studio
- Why: Under App Store and Google Play, the first badge is what people can download now, and a second badge, when there is one, shows the newest release on its way.
- Watch out: A second badge reading Approved means the release passed the store's review and waits for your ExpoPlatform team to start the rollout.
- Done when: The first badge names your new version, such as “Live · 1.94.4”.
- Go deeper: [Your apps](https://ajayexpop.github.io/appbuilder/start/your-apps/)

## Stage 6: Bring people onto the new version

Your ExpoPlatform team sets whether people on older versions are asked, or made, to update, and Analytics shows which versions phones run.

Sources: [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/).

### 12. Your ExpoPlatform team sets the update rules, if older versions should be asked, or made, to update.

- Who: Our team is on it
- On screen: “Older versions are asked, or made, to update when the app starts.”
- Why: Below the Must update version, people must update before they can use the app; below Asked to update, they are asked and may skip it.
- Watch out: These rules are set by your ExpoPlatform team: to change a rule or the wording of a prompt, ask your ExpoPlatform contact.
- Watch out: A rule for a version that is not fully live in that store yet waits, and the app is told the rule only once that version is fully live.
- Done when: App updates on your app's Overview shows the rules you asked for.
- Go deeper: [Your app's Overview](https://ajayexpop.github.io/appbuilder/start/overview/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/)

### 13. In Analytics, open the Devices tab to see which versions phones run.

- Who: Your move
- Picture: The Devices tab, with its Versions chart, a screenshot of App Studio
- Why: Versions counts the installs on each version of your app over the last 30 days, each install once, under the version it reported last.
- Done when: Your new version shows under Versions, with its installs.
- Go deeper: [Analytics: Devices](https://ajayexpop.github.io/appbuilder/after/analytics/devices/), [How to see which phones run one app version](https://ajayexpop.github.io/appbuilder/after/analytics/phones-on-a-version/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/)

## Something's wrong?

- **My new icon, name, splash picture or widget does not show on phones.** Why: They reach phones only with a new build, and so does switching a widget on or off; in store builds, the name under the icon is the store name, not App name in the app. What to do: For the icon, the splash picture and its colour or a widget switch, make a new build, install it and publish it; for the name in store builds, ask your ExpoPlatform contact. See: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to change the app's name in the app](https://ajayexpop.github.io/appbuilder/build/app-identity/change-name/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/), [Home-screen widgets](https://ajayexpop.github.io/appbuilder/look/widgets/).
- **A choice in Send to testers is greyed out.** Why: The app is not in that store yet, there is no Store-signed build of that platform, another release of that platform is still moving (a store release included), or, on Android, an earlier release waits as a draft or the newest build is already on another Google Play track. What to do: Read the reason the dialog gives and do what it says; if new builds are not Store-signed, or a release waits as a draft in Google Play Console, ask your ExpoPlatform contact; while another release is still moving, wait until it has finished. See: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/).
- **A TestFlight send says “Failed to submit release”.** Why: The release was created but not sent; with a demo account saved in Publish, its demo event may not be ready for review, or its saved login cannot be used. What to do: Check the demo account under Store review in Publish, then press Send again: it continues the same release. See: [How to send a build to your testers](https://ajayexpop.github.io/appbuilder/release/builds/send-to-testers/), [How to give the store reviewers a demo account](https://ajayexpop.github.io/appbuilder/release/publish/add-demo-account/).
- **A release is stuck at Ready.** Why: Store review still has something to sort out, such as a missing demo account, a demo account the check cannot sign in with, or a demo event that looks empty. What to do: Open Store review in Publish and fix each item marked Your move; items marked Our team are your ExpoPlatform team's. See: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to give the store reviewers a demo account](https://ajayexpop.github.io/appbuilder/release/publish/add-demo-account/).
- **Releases says “Approved, but the stores could not take it yet”.** Why: ExpoPlatform approved, but publishing could not start: each platform takes one release at a time, and another release of that platform, such as a test send, was still on its way. What to do: Nothing: ExpoPlatform is on it. See: [How to ask ExpoPlatform to publish the app](https://ajayexpop.github.io/appbuilder/release/publish/ask-to-publish/), [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/).
- **A store turned the release down.** Why: The store found a problem; its card shows the store's message when it gave one. What to do: Fix it, build again if needed, and ask again with Submit to the stores: the new release goes through ExpoPlatform's approval and the store's review again. See: [From test build to the stores](https://ajayexpop.github.io/appbuilder/release/journey/), [How to follow a release through the store's review](https://ajayexpop.github.io/appbuilder/release/publish/follow-review/).
- **The store approved the new version, but it is not reaching people.** Why: Later iPhone versions, and Android beyond its first 5% stage, wait for your ExpoPlatform team to start the rollout. What to do: Ask your ExpoPlatform contact. See: [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/), [Your apps](https://ajayexpop.github.io/appbuilder/start/your-apps/).
- **What now says “The rollout is stopped”.** Why: The rollout was halted, and ExpoPlatform is looking at it. What to do: Ask your ExpoPlatform contact. See: [How to follow a rollout](https://ajayexpop.github.io/appbuilder/release/publish/follow-rollout/).
- **People on older versions are not asked to update.** Why: App updates reads Off when no rule is set, and a rule for a version that is not fully live in that store yet waits until it is. What to do: Check App updates on your app's Overview, and ask your ExpoPlatform contact to set or change a rule. See: [Your app's Overview](https://ajayexpop.github.io/appbuilder/start/overview/), [Update your app after launch](https://ajayexpop.github.io/appbuilder/after/updating/).

## Facts from outside App Studio

- [Apple: App Review](https://developer.apple.com/distribute/app-review/), read 14 Oct 2026: "App Review works around the clock, typically reviewing at least 50% of submissions in less than 24 hours and 90% in less than 48 hours. … if your app is still in review and the launch of your event is quickly approaching, you can request to have your app review expedited."
- [Google Play Console Help: Publish your app](https://support.google.com/googleplay/android-developer/answer/9859751), read 14 Oct 2026: "For certain developer accounts, we'll take more time to thoroughly review your app to help better protect users. This may result in review times of up to seven days or longer in exceptional cases."
