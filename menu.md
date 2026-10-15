# Build the menu and content

From each event's menu in App Studio to the features and pages people find in the app.

**The result:** Each event's menu holds the features and pages each kind of person needs, named, ordered and shown to the right people, and installed builds of this app show it at their next refresh.

Sources: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/).

_App Studio Playbook v1.0.1, built from the App Studio guide v1.1.0, checked against App Studio c1421d4 on 14 Oct 2026. Each step links to the App Studio guide pages it comes from._

## Who does what

- **Your move**: You build each event's menu in App Studio, in Menu & content: its items, their order, names and icons, the bottom bar and who sees each item.

Sources: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/).

## Before you start, have ready

- Your app's events chosen in Events & updates: until then, Menu & content shows only a message asking you to choose them.
- For each event, the features and pages each kind of person needs, and the items, four at most, that should be tabs of the bottom bar.
- Names of up to 20 characters for items and section headers, in each language your app offers.
- Any icons of your own: App Studio asks for “A square PNG, one colour on a transparent background, at least 48 px.”
- Your own pages, written and saved in Custom pages, if you want them in the menu.
- Files for a documents page: PDF, Word or Excel, of up to 20 MB each.
- For a contacts page: each person's details, and photos as PNG or JPEG files of up to 10 MB.

Sources: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [Events & updates](https://ajayexpop.github.io/appbuilder/build/app-general/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [How to rename an item or change its icon](https://ajayexpop.github.io/appbuilder/build/app-menu/rename-and-icon/), [How to rename a menu section](https://ajayexpop.github.io/appbuilder/build/app-menu/rename-section/), [How to put a saved page in the menu](https://ajayexpop.github.io/appbuilder/look/pages/add-a-page-to-the-menu/), [How to add documents to a documents page](https://ajayexpop.github.io/appbuilder/build/app-menu/add-documents/), [How to fill a contacts page](https://ajayexpop.github.io/appbuilder/build/app-menu/fill-contacts/).

## Stage 1: Put your pages in, then open the menu

Each event of your app has its own menu, in four sections. Item names, section headers and page content are kept per language; everything else is one setting for all languages.

Sources: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/).

### 1. If you wrote pages in Custom pages, press Add to menu on each one listed under Not in the menu.

- Who: Your move
- On screen (drawn from App Studio's code): Add to menu, Edit
- Why: It goes to the end of the Event section at once, and installed builds of this app show it on their next refresh, with no new build.
- Watch out: If Menu & content is already open in another tab, reload it before you save there, or its save takes the page out of the menu again.
- Watch out: In Menu & content, a page listed as “Page title” has no name yet: press Edit and name it, or the menu cannot be saved.
- Done when: The page's row reads In the menu.
- Go deeper: [How to put a saved page in the menu](https://ajayexpop.github.io/appbuilder/look/pages/add-a-page-to-the-menu/), [How to write a page of your own](https://ajayexpop.github.io/appbuilder/look/pages/write-a-page/), [Custom pages](https://ajayexpop.github.io/appbuilder/look/pages/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/)

### 2. Open Menu & content, pick the event in Event, and the language if your app has more than one.

- Who: Your move
- Picture: Menu & content, in the menu of sections on the left, a screenshot of App Studio
- Watch out: Switching the event or the language drops unsaved changes without asking: press Save changes first.
- Watch out: Language of the texts starts on English each time the section opens: pick your language before you edit its texts.
- Watch out: Change this app's menu here from now on: later changes in the old App Builder no longer reach it, and nothing you save here changes your old apps.
- Done when: Menu & content shows that event's menu, with its names in that language.
- Go deeper: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [Find your way around](https://ajayexpop.github.io/appbuilder/start/find-your-way/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [Glossary](https://ajayexpop.github.io/appbuilder/help/glossary/)

## Stage 2: Add the features and pages people need

Add each item to the section whose people need it. In the app, “Event (everyone)” is shown to everyone, signed in or not; “My account (participants)” to signed-in people except exhibitor company owners; “My company (team members)” to signed-in team members; and “My company (exhibitor)” to signed-in exhibitor company owners.

Sources: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/).

### 3. In a section, choose a feature, A custom page or A documents page in Add to this section, and press Add.

- Who: Your move
- On screen (drawn from App Studio's code): Section header, Add to this section, Add
- Why: The item goes at the end of the section with its own name and icon, seen by everyone who sees the section, and not in the bottom bar.
- Watch out: Add to this section offers only the features switched on for the event and not already in the section.
- Watch out: Save in an item's window saves the whole menu at once, with every other unsaved change on the page.
- Watch out: If people already use this app, fill a new page and set Visible for in its window before you save.
- Done when: The new item is the last row of its section, unsaved until you press Save in its window or Save changes.
- Go deeper: [How to add a feature, a custom page or a documents page to a section](https://ajayexpop.github.io/appbuilder/build/app-menu/add-item/), [How to add a built-in screen to the menu](https://ajayexpop.github.io/appbuilder/look/pages/add-a-built-in-screen/), [How to limit who sees an item](https://ajayexpop.github.io/appbuilder/build/app-menu/limit-audience/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/)

## Stage 3: Fill in the menu's own pages

Which kinds of page you can add depends on what the event offers, and each is filled in its item's window, which keeps your changes only when you press Save. Its tabs, documents, contacts and networks are kept per language, so fill them in the language you picked when you opened Menu & content, while a web page address is one for all languages.

Sources: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [How to write a custom page](https://ajayexpop.github.io/appbuilder/build/app-menu/write-custom-page/), [Glossary](https://ajayexpop.github.io/appbuilder/help/glossary/), [Menu & content: field reference](https://ajayexpop.github.io/appbuilder/build/app-menu/fields/).

### 4. Press Edit on a custom page, fill its tabs, or switch Open a web page instead on, and press Save.

- Who: Your move
- On screen (drawn from App Studio's code): Open a web page instead, Tab name, Title, Text, Background colour, Background picture, Add a tab
- Why: A custom page holds your own tabs, with their names, titles, texts and backgrounds, or a web page that opens in their place.
- Watch out: Web page address has no format check in App Studio, so check the address before you save.
- Watch out: Remove the tab removes a tab at once, without asking.
- Watch out: A page built with the old App Builder's blocks opens as “Text (HTML)” and stays HTML, to keep every block.
- Done when: App Studio says “Saved”, and the item's window closes.
- Go deeper: [How to write a custom page](https://ajayexpop.github.io/appbuilder/build/app-menu/write-custom-page/), [How to edit a page made before App Studio](https://ajayexpop.github.io/appbuilder/build/app-menu/edit-old-page/), [Menu & content: field reference](https://ajayexpop.github.io/appbuilder/build/app-menu/fields/)

### 5. Press Edit on a documents page, add each file with Add a document (PDF, Word, Excel), and press Save.

- Who: Your move
- On screen (drawn from App Studio's code): Document 1, Add a document (PDF, Word, Excel), Open, Remove
- Why: The page lists each document under the name in its box, which starts as the file's name without its extension.
- Watch out: A file uploads as soon as you choose it, but joins the page only when you press Save.
- Watch out: Remove takes a document off the page at once, without asking.
- Done when: App Studio says “Saved”, and the item's window closes.
- Go deeper: [How to add documents to a documents page](https://ajayexpop.github.io/appbuilder/build/app-menu/add-documents/), [Menu & content: field reference](https://ajayexpop.github.io/appbuilder/build/app-menu/fields/)

### 6. If the menu has a contacts page, press Edit on it, add each person with Add a contact, and press Save.

- Who: Your move
- On screen (drawn from App Studio's code): Group, Job title, First name, Last name, Phone, Email, Photo, Add a contact
- Watch out: Phone and Email are not checked for format, so check each one before you save.
- Watch out: Remove takes a contact off at once, without asking.
- Done when: App Studio says “Saved”, and the item's window closes.
- Go deeper: [How to fill a contacts page](https://ajayexpop.github.io/appbuilder/build/app-menu/fill-contacts/), [Menu & content: field reference](https://ajayexpop.github.io/appbuilder/build/app-menu/fields/)

### 7. On a social media item, press Edit, tick the networks under Show these social networks, and press Save.

- Who: Your move
- On screen (drawn from App Studio's code): Show these social networks
- Why: The item carries only the networks you tick: Facebook, LinkedIn, X (Twitter), YouTube or Pinterest.
- Watch out: On a newly added item none is ticked, so it carries no network until you tick one.
- Done when: App Studio says “Saved”, and the item's window closes.
- Go deeper: [How to choose the social networks of a social media item](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-social/), [Menu & content: field reference](https://ajayexpop.github.io/appbuilder/build/app-menu/fields/)

## Stage 4: Make things easy to find

Name and order each section's items, and choose up to four items of the event's whole menu as tabs of the app's bottom bar.

Sources: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/).

### 8. Name each section in Section header, order its items with Move up and Move down, and press Save changes.

- Who: Your move
- On screen (drawn from App Studio's code): Section header, Bottom bar, Move up, Move down, Edit, Remove from the menu
- Why: In the app's menu, the header is the section's title, and the section lists its items in your order.
- Watch out: Items move only within their own section.
- Watch out: A section header you empty and save stays empty.
- Done when: On a wide screen, the preview's menu shows your headers and order, and App Studio said “Saved”.
- Go deeper: [How to change the order of items in a section](https://ajayexpop.github.io/appbuilder/build/app-menu/reorder/), [How to rename a menu section](https://ajayexpop.github.io/appbuilder/build/app-menu/rename-section/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/)

### 9. Press Edit on an item, change its Name in the menu and its Icon, and press Save.

- Who: Your move
- On screen (drawn from App Studio's code): Name in the menu, Icon, Cancel, Save
- Why: The name is the item's title in the app's menu, and on its tab when it is in the bottom bar.
- Watch out: Names are kept per language: rename the item in each language, and save before you switch.
- Watch out: An icon you upload must be a PNG: App Studio refuses a JPEG.
- Done when: App Studio says “Saved”, and the item's window closes.
- Go deeper: [How to rename an item or change its icon](https://ajayexpop.github.io/appbuilder/build/app-menu/rename-and-icon/), [Menu & content: field reference](https://ajayexpop.github.io/appbuilder/build/app-menu/fields/)

### 10. Switch Bottom bar on for up to four items, in the order you want the tabs, and press Save changes.

- Who: Your move
- On screen (drawn from App Studio's code): Bottom bar (on), Move up, Move down, Edit, Remove from the menu
- Why: In the app, the items become tabs of the bottom bar, beside the menu button, for the people who can see each item.
- Watch out: The tabs follow the order in which you switched them on, not the items' places: to reorder them, switch them off and on again.
- Watch out: A hidden item with Bottom bar on still takes one of the four places.
- Done when: The line above the sections counts the places used, out of four, and App Studio said “Saved”.
- Go deeper: [How to put items in the bottom bar](https://ajayexpop.github.io/appbuilder/build/app-menu/bottom-bar/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [How to hide or remove an item](https://ajayexpop.github.io/appbuilder/build/app-menu/hide-or-remove/)

## Stage 5: Choose who sees each item

With nothing limited, everyone who sees a section sees its items. You can limit an item to some signed-in people, show a custom page to guests only, or hide an item.

Sources: [How to limit who sees an item](https://ajayexpop.github.io/appbuilder/build/app-menu/limit-audience/), [How to show a custom page to guests only](https://ajayexpop.github.io/appbuilder/build/app-menu/guests-only-page/), [How to hide or remove an item](https://ajayexpop.github.io/appbuilder/build/app-menu/hide-or-remove/).

### 11. Press Edit on an item, tick who should see it under Visible for, and press Save.

- Who: Your move
- On screen (drawn from App Studio's code): Name in the menu, Visible for, Hide this item, Cancel, Save
- Why: The item then shows only to the signed-in people your ticks match.
- Watch out: Once anything is ticked, people who are not signed in no longer see the item, even with All visitors ticked.
- Watch out: If you tick exhibitor choices, check the menu with View as set to Exhibitor (company owner) after you save.
- Done when: The item's row reads “Limited to some people”.
- Go deeper: [How to limit who sees an item](https://ajayexpop.github.io/appbuilder/build/app-menu/limit-audience/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/)

### 12. In a custom page's window, switch Only for people who are not signed in on, and press Save.

- Who: Your move
- On screen (drawn from App Studio's code): Name in the menu, Visible for, Hide this item, Only for people who are not signed in (on), Cancel, Save
- Why: Signed-in people no longer see the page in the app's menu; people who are not signed in do.
- Watch out: The switch is offered only for custom pages in the “Event (everyone)” section; for a page from Custom pages, listed as “Your page”, Who sees it on its blocks there can show each block to guests only.
- Done when: In the preview, on a wide screen, the page shows with View as set to Guest (not signed in), and not as a Visitor.
- Go deeper: [How to show a custom page to guests only](https://ajayexpop.github.io/appbuilder/build/app-menu/guests-only-page/), [How to show a block only to guests or only to signed-in people](https://ajayexpop.github.io/appbuilder/look/pages/limit-a-block/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/)

### 13. To keep an item in App Studio but out of the app, switch Hide this item on in its window and press Save.

- Who: Your move
- On screen (drawn from App Studio's code): Name in the menu, Visible for, Hide this item (on), Cancel, Save
- Why: The app then leaves the item out completely: no menu row, no tab, no tile.
- Watch out: Remove from the menu does not ask first: once you save, the item is gone from this event's menu in every language, with its content.
- Done when: The item's row reads “Hidden”.
- Go deeper: [How to hide or remove an item](https://ajayexpop.github.io/appbuilder/build/app-menu/hide-or-remove/)

## Stage 6: Check and save

The phone beside the form shows your unsaved menu as the kind of person you choose. Only saved changes reach installed builds of this app, the next time they refresh, with no new build.

Sources: [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/).

### 14. In the phone preview, pick each kind of person in View as, then open the menu and tap through it.

- Who: Your move
- On screen: “Open the menu in the phone to see your changes. Saved changes reach the app itself.”
- Why: View as offers Guest (not signed in), Visitor, Exhibitor (company owner), Team member, Speaker and Moderator, and saves nothing.
- Watch out: The preview shows only on wide screens.
- Watch out: A change made in an item's window shows in the preview only after you press Save there, which saves it at once.
- Done when: The phone preview shows the menu you want for each kind of person.
- Go deeper: [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/)

### 15. Press Save changes, then add the texts in each other language, and build each other event's menu in Event.

- Who: Your move
- On screen: **Saved** “Changes reach the app the next time it refreshes.”
- Why: Installed builds of this app show the saved menu the next time they refresh, with no new build.
- Watch out: Your ExpoPlatform team can also change an event's menu: what they save shows in Menu & content, and what you save is what the app shows.
- Watch out: A document, a picture or an icon of your own is stored as soon as it is uploaded, even if the menu is never saved.
- Watch out: Your old apps never show what you save here: a phone shows it only once a build of this app is installed, a test build from Build & test first.
- Done when: App Studio says “Saved” for each event's menu, in each language.
- Go deeper: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [Set by your ExpoPlatform team](https://ajayexpop.github.io/appbuilder/help/set-by-team/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/), [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [Add a new app](https://ajayexpop.github.io/appbuilder/start/new-app/)

## Something's wrong?

- **A page I put in the menu from Custom pages is gone from it.** Why: Menu & content was already open in another tab, and its save took the page out of the menu again. What to do: Put the page back with Add to menu in Custom pages, then reload Menu & content before you save there. See: [How to put a saved page in the menu](https://ajayexpop.github.io/appbuilder/look/pages/add-a-page-to-the-menu/).
- **Menu & content only asks you to choose the event, or the event tags, in Events & updates.** Why: The app's event, or for an app with several events its event tags, is not chosen yet. What to do: Choose them in Events & updates and save, then pick an event in Event. See: [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [Events & updates](https://ajayexpop.github.io/appbuilder/build/app-general/).
- **My changes disappeared when I picked another event or language.** Why: In Menu & content, Sign-in & registration and Events & updates, switching the event or the language drops unsaved changes without asking. What to do: Make the changes again, and save before you switch. See: [Per event, per language or for the whole app](https://ajayexpop.github.io/appbuilder/look/scope/), [How to choose the event and the language you edit](https://ajayexpop.github.io/appbuilder/build/app-menu/choose-event-and-language/), [Sign-in & registration](https://ajayexpop.github.io/appbuilder/build/app-sign-in/).
- **What I want to add is not in Add to this section.** Why: It offers only the features switched on for the event and not already in the section, and A custom page or A documents page only while the event has a free place of that kind. What to do: Look for the item in the section, perhaps marked “Hidden”; a feature not switched on for the event, or a kind of page with no free place, cannot be added here. See: [How to add a feature, a custom page or a documents page to a section](https://ajayexpop.github.io/appbuilder/build/app-menu/add-item/), [Glossary](https://ajayexpop.github.io/appbuilder/help/glossary/).
- **Saving the menu says “Every menu item needs a name”.** Why: An item has no name, for example a page from Custom pages that Menu & content shows as “Page title”, so the menu was not saved. What to do: Press Edit on that item, give it a name, and save again. See: [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [How to add a feature, a custom page or a documents page to a section](https://ajayexpop.github.io/appbuilder/build/app-menu/add-item/), [How to rename an item or change its icon](https://ajayexpop.github.io/appbuilder/build/app-menu/rename-and-icon/).
- **The Bottom bar switches are greyed out, or App Studio says “At most 4 items fit in the bottom navigation”.** Why: All four places are taken, a hidden item with Bottom bar on included, or more are on, for example items taken over from the old App Builder. What to do: Switch items off until four or fewer are on, then save; to add another tab, switch one off first. See: [How to put items in the bottom bar](https://ajayexpop.github.io/appbuilder/build/app-menu/bottom-bar/), [How to hide or remove an item](https://ajayexpop.github.io/appbuilder/build/app-menu/hide-or-remove/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [Menu & content: field reference](https://ajayexpop.github.io/appbuilder/build/app-menu/fields/).
- **An item does not show for some people.** Why: It is hidden, limited under Visible for, a custom page shown to guests only, or in a section those people do not see. What to do: Check its row for “Hidden” or “Limited to some people”, a custom page's window for Only for people who are not signed in, and the menu in the preview with View as. See: [How to limit who sees an item](https://ajayexpop.github.io/appbuilder/build/app-menu/limit-audience/), [How to hide or remove an item](https://ajayexpop.github.io/appbuilder/build/app-menu/hide-or-remove/), [Menu & content](https://ajayexpop.github.io/appbuilder/build/app-menu/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [How to show a custom page to guests only](https://ajayexpop.github.io/appbuilder/build/app-menu/guests-only-page/).
- **There is no phone preview beside the menu.** Why: The preview shows only on wide screens. What to do: Open Menu & content on a wide screen. See: [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/).
- **A saved change does not show on phones yet.** Why: Installed builds of this app get saved changes the next time they refresh; an app made before App Studio never gets them, and a phone without a build of this app has nothing to refresh. What to do: Check that App Studio said “Saved”, then look on a test build of this app from Build & test after its next refresh. See: [When your changes reach the app](https://ajayexpop.github.io/appbuilder/start/changes-reach-the-app/), [How to check the menu before saving](https://ajayexpop.github.io/appbuilder/build/app-menu/check-in-preview/), [Your old App Builder settings](https://ajayexpop.github.io/appbuilder/build/old-app-builder/), [Add a new app](https://ajayexpop.github.io/appbuilder/start/new-app/).
