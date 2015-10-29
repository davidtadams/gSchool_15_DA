# Daily Warm-up Exercises for JavaScript

#### Installation

Jasmine is required for these warm-ups:

```bash
npm install -g jasmine
```

#### Usage

Examples are ordered alphanumerically, in the order in which they should be completed. It is expected that you are completing these warm-ups sequentially, at your own pace. To run an example, first `cd` into the proper directory, for example:

```bash
cd 00_functions
```

Every warm-up follows the same directory structure, there will be a `src.js` file which contains stubs you will fill in with *your* code (having to add additional functions, etc). Additionally, there is a `spec/` directory which contains `spec.js` - the specifications for that warm-up, and details of behavior for the code you are writing. To run the specs, simply type:

```bash
jasmine
```

in that warm-up's root directory (in our example this is `00_functions`).

#### How to Do a Warm-up

You will observe that some specs show `*` as output, indicating that they are pending. After making all failing tests pass, modify `spec/spec.js` and change the first `xit` (pending test) to `it` and re-run specs to see the failure, next fill-in the missing functionality and repeat until there are no more pending tests and all tests pass.
