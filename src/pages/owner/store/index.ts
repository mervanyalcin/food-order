import { makeAutoObservable } from "mobx";

export class Admin {
  constructor() {
    makeAutoObservable(this);
  }

  /* Is Open Category Modal */
  isCategoryModalOpen: boolean = false;
  setIsCategoryModalOpen = (): void => {
    this.isCategoryModalOpen = !this.isCategoryModalOpen
  };

  
  /* Is Open Product Modal */
  isProductModalOpen: boolean = false;
  setIsProductModalOpen = (): void => {
    this.isProductModalOpen = !this.isProductModalOpen
  };


}

export const AdminStore = new Admin();
