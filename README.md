You will need to download a package manager called yarn to build and another one called npm (basically just node) to install the packages. sounds very scary, but it isnt, i promise

command line (terminal) in the folder you download this thing
(has to be in that folder or it wont find the package.json file that tells it what to download)
1. npm install
2. if it works skip this step, if not go here https://nodejs.org/en/ and just download. then you'll have npm and node, and then repeat step 1

next youre going to want to install yarn, and you have to use another package manager to do that. homebrew. 

1. copy paste this into your command line to install homebrew 
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2. now that you have homebrew type - brew install yarn
3. now that should download yarn and you're almost done

Finally, we build the project. go to the folder, and type this shit into your command line (step 1-3)
1. yarn build
2. yarn global add serve
3. serve -s build
4. go to http://localhost:5000

good luck on your project dude ^_^