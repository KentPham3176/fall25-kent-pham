
# Cozy Chore (fall25-kent-pham)

A playful multi-page static site for tracking chores, inviting friends, and earning cozy badges — all with a pixel-art inspired UI.

## Quick Preview
- Open `index.html` in your browser (double-click or use your editor to open the file). No build step required.

## Features
- **Dynamic Chore List:** Chores are stored in a JavaScript array (`script.js`) and rendered as cozy pixel-art cards in the Chores page.
- **Pixel-art UI:** Uses the 'Press Start 2P' font, pastel palette, pixel borders, and soft shadows for a retro game feel.
- **Teammate Visit Buttons:** Each teammate card has a "Visit" button linking to their chore page.
- **Responsive Layout:** CSS Grid for page structure, Flexbox for panels and navs.
- **Easy Customization:** Add, edit, or remove chores by editing the `chores` array in `script.js`.

## File Structure
- `index.html` — Home / landing page
- `chores.html` — Your Assigned Chores (main dashboard, dynamic chore list)
- `setup.html` — Setup / invite friends
- `friends.html` — Friend view (linked from Chores)
- `achievements.html` — Achievements / badges
- `about.html` — Project/about info
- `styles.css` — Single stylesheet (site-wide design system)
- `script.js` — Small client-side behaviors (active link, menu toggle, dynamic chores)

## Customizing Chores
- Open `script.js` and edit the `chores` array:
	```js
	const chores = [
		{
			title: "Wash Dishes",
			description: "Clean all dishes after dinner.",
			category: "Kitchen",
			exp: 10,
			status: "unfinished"
		},
		// ...add more chores
	];
	```
- Chores will automatically appear in the "Your Chore List" section of `chores.html`.

## Contributing / Editing
- This is a static site — edit the HTML/CSS/JS files and refresh the browser to see changes.
- Prefer small, focused commits when changing layout or shared styles.

## License & Author
- Author: Kent Pham
- License: MIT (feel free to add a LICENSE file if you want an explicit license)

---
If you'd like, I can add a small preview script or a tiny dev server (e.g., with Python or Node) for live reloading during development.
