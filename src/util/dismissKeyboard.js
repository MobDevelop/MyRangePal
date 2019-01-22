'use strict';

import { TextInputState } from 'react-native'

function dismissKeyboard() {
    TextInputState.blurTextInput(TextInputState.currentlyFocusedField());
}

export default  dismissKeyboard;