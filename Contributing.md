# Setup development environment

- Ensure _apm_ (installed with Atom) is part of your path
- go to the folder where your cloned the repository
- call `apm link --dev`
- call `atom -d`

# Release a new version

The steps are currently manual. An automated way will be very convenient for the future.

- Ensure the version number in _package.json_ has been updated since last published version.
- Create tag named with the version in package.json and prefixed by 'v', for instance _v0.2.1_
- Push the tag
- Ensure _apm_ (installed with Atom) is part of your path
- Go to the folder where your cloned the repository
- Call `apm publish --tag vx.x.x`
- The first time, you will be asked for a GitHub token, you have to follow instructions of the apm command
- Update the _package.json_ with next version increment to prepare next iteration

For more information see [official documentation about publishing](https://flight-manual.atom.io/hacking-atom/sections/publishing/).