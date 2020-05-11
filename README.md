<img src="https://firebasestorage.googleapis.com/v0/b/menuenapp-prod.appspot.com/o/treyway1.gif?alt=media&token=5917f2b9-a017-4083-843e-15931fb7c70d" alt="fixx" >

# Summary
**Main logic** in **86** idiomatic `lines of code`<br/>
**No third party library:** I previously worked with [React Hook Form](https://github.com/react-hook-form/react-hook-form), although for this job, I achieved the [spec](https://firebasestorage.googleapis.com/v0/b/menuenapp-prod.appspot.com/o/Tray.io%20Frontend%20Engineer%20-%20Technical%20Exercise%20(2).pdf?alt=media&token=8643bc4b-7749-4b94-b3ca-0c38d0a1c16d) requirements and further without it.<br/>
**Built on Hooks:** controlled navigation progress with state persistence.<br/>
[**Live link**](https://treyway.netlify.app) 👈 onClick

## How to get started
1. Open terminal
2. Run `git clone https://github.com/vercetti11/trey.git`
3. Run `npm i`
4. Run `yarn start`

## Usage
User can only advance until the last unsubmitted page.<br/>
To advance further: fill the fields, refill if necessary, hit submit button.<br/>
After validation user sees next page, but he can go back to a previous page and change input values(they persist).

## Tests
Run `yarn test`in a new terminal window.<br/>
Tests are functional and made from a user point of view, just as the spec:
<li style="color:green">Show one page of the form at a time.</li>
<li style="color:green">Show the current page position of the form.</li>
<li style="color:green">Validate the input fields upon submission of each page.</li>
<li style="color:green">If there are any validation errors, show an error message in the form and block progress.</li>



# Extend the app
### Change configuration of a page
With the current design, each form page is a component, therefore its a matter of editing the corresponding element.
### How is navigation implemented
Mapping over `formPages` renders three buttons, one for each element in the array.<br/>
User clicks on a button to navigate, and the button sets a new state using the index from mapping over formPages.`formPages`.<br/>
Next, a `switch` statement assesses what component to render depending on the initial value (0) or the index passed from the previously clicked button.<br/>
**Notice** how this is a **lowly coupled design.**<br/>

```javascript
const formPages = ["User", "Privacy", "Done"];
const [activePage, setActivePage] = useState(0);
const [progress, setProgress] = useState(0);

{formPages.map((page, index) => (
    <button
      key={page}
      disabled={progress < index}
      onClick={() => setActivePage(index)}
      className={page === formPages[activePage] ? "active" : ""}
    >
      {page}
    </button>
  ))}
  
  {...}
  
   switch (activePage) {
    case 0:
        return <FormPageUser/>
    case n:
        return <FormPageN/>
   }
```
### Add a new page
In [App.js](https://github.com/vercetti11/trey/blob/db993fba1a183d9370c6fbeefef726631e88724d/src/App.js#L10) do the following:
1. Insert name of the new page in `const formPages = ["User", "New Page", "Privacy", "Done"];`
2. Wire up a component in the `Switch` statement with the appropriate index and `props`, in this case, `1`.
3. Implement mentioned component as needed.

# Thoughts
I can improve the app with actual rendered validation messages by using [react-hook-form](https://github.com/react-hook-form/react-hook-form).<br/>

State can be stored to `localstorage` to persist an accidental reload; alternatively, accidental reload could be prevented by setting an observer on `beforeunload event.<br/>

React Hook Form praises it's superiority to [Redux Form](https://github.com/redux-form/redux-form), but it doesn't mean it is against Redux. The approach I would take using react-hook-form with Redux is to dispatch actions on submit instead of <input onChange.
<br/>

All the manual wiring up of components can be abstracted, but that leads to [overengineering](https://en.wikipedia.org/wiki/Anti-pattern).

> Programing it's like gardening.

### Thank you! 🙌


<img width="100px" src="https://media.giphy.com/media/YXtmk90x4Uib08lX2y/giphy.gif"/>
