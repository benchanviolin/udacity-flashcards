# Flashcards
_A React Native app developed by Ben Chan in Sept 2017 as part of the Udacity React Nanodegree program_

This app has been tested using the following device(s):
* standard Android emulator `Nexus_5_API_23_x86`
* Samsung Galaxy S7 in Expo app

## Features
* Redux store connected to AsyncStorage

## Installation
* Start the Android emulator:
    - `cd $PATH_TO_ANDROID_SDK/emulator`
    - `emulator -list-avds`
    - `emulator -avd $AVD_NAME`
* In another terminal window, install and start the app
    - `git clone https://github.com/benchanviolin/udacity-flashcards.git`
    - `cd udacity-flashcards`
    - `yarn install`
    - `yarn run android`

# How to Play
Navigate between three main tabs:
* ALL DECKS
* ADD NEW DECK
* DELETE DECKS

## All Decks
View a list of all decks and number of cards.
Press a deck to go to View Deck.

#### View Deck
Press Add New Card to add a new card.
Press Start a Quiz to start a quiz.
Press Go back to return to the previous screen.

#### Add New Card
Enter a question and an answer, then press SUBMIT to add the card to the current deck.
Press Cancel and go back to return to View Deck.

#### Start a Quiz
Read the question and try to remember the answer.
Press Show Answer to reveal the answer.  Press Show Question to return to the question.
Press CORRECT if you were correct.
Press Incorrect if you were not correct.
Once all questions have been marked, review your score.  Press PLAY AGAIN! to start a new quiz.  Press Exit quiz and go back to return to View Deck.

## Add Deck
Enter a title, then press SUBMIT to add the deck and automatically be redirected to View Deck.

## Delete Decks
Press DELETE ALL DECKS to remove all decks and cards.

### Known Issues
I had trouble getting the Navigator to go from creating a new deck directly to viewing the new deck while keeping the back navigation intact and returning to the ALL DECKS tab instead of the ADD NEW DECK.  So I told the app to navigate to ALL DECKS (so the View Deck back button would return to this tab instead of the original ADD NEW DECKS tab), then within 1 millisecond redirect automatically to View Deck.  Is there a way to do this seamlessly without showing the ALL DECKS tab in between transitions?
