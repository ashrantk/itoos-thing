#Itoo's thing

Welcome one and all to the glorious world of the thing for that guy for that other thing that he needs this thing for. Below is a relatively hand-holdy and detailed version of what you'll need to do to run this thing on your thing to show those people that want to see the thing on that day. 
enjoy.
also shameless plug, go to ashrant.com for your weekly dose of memes whenever I decide to edit that thing

## installing npm/node

You will need to download a package manager called yarn to build and another one called npm (basically just node) to install the packages. sounds very scary, but it isnt, i promise

command line (terminal) in the folder you download this thing
(has to be in that folder or it wont find the package.json file that tells it what to download)

```bash
npm install
``` 
if it works skip this step, if not go here https://nodejs.org/en/ and just download. then you'll have npm and node, and then repeat the npm install

## installing brew and yarn

next youre going to want to install yarn, and you have to use another package manager to do that. homebrew. 

copy paste this into your command line to install homebrew 
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
now that you have homebrew type 
```bash
brew install yarn
```
now that should download yarn and you're almost done

## FINALLY running this shit
Finally, we build the project. go to the folder, and type this shit into your command line
```bash
yarn build
yarn global add serve
serve -s build
```
and then just go to http://localhost:5000 in your browser and you're good to go

good luck on your project dude ^_^