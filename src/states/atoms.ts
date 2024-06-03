// atoms.ts
import { atom } from 'recoil';

export interface FormRow {
  id: number;
  firstDropdown: string | null;
  secondDropdown: string | null;
  thirdDropdown: string[];
  startDate: Date | null;
  endDate: Date | null;
}

export const formRowsState = atom<FormRow[]>({
  key: 'formRowsState',
  default: [
    {
      id: 1,
      firstDropdown: null,
      secondDropdown: null,
      thirdDropdown: [],
      startDate: null,
      endDate: null,
    },
  ],
});
