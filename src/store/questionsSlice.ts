import { createSlice } from '@reduxjs/toolkit';

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: {
    AZSort: false,
    list: [
      {
        question: 'How to add a question?',
        answer: 'Just use the form below!',
        id: 0,
      }
    ],
  },
  reducers: {
    toggleSort: state => {
      state.AZSort = !state.AZSort;
    },
    clear: state => {
      state.list = [];
    },
    add: (state, action) => {
      state.list.push({
        ...action.payload,
        id: Date.now(),
      });
    },
    delete: (state, action) => {
      state.list.filter((item) => item.id !== action.payload);
    }
  },
});

export interface QuestionData {
  id: number;
  question: string;
  answer: string;
}

interface AppState {
  questions: {
    AZSort: boolean;
    list: QuestionData[];
  }
}

export const { toggleSort, clear, add } = questionsSlice.actions;

export const selectIsSorted = (state: AppState) => state.questions.AZSort;

export const selectQuestions = (state: AppState) => state.questions.AZSort
  ? state.questions.list.slice().sort((a, b) => a.question.localeCompare(b.question))
  : state.questions.list;

export const selectCount = (state: AppState) => state.questions.list.length;

export default questionsSlice.reducer;
