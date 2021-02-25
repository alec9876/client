import {Photo} from './photo';

export interface Member {
  id: number;
  userName: string;
  photoUrl: string;
  age: number;
  firstName: string;
  lastName: string;
  knownAs: string;
  created: Date;
  lastActive: Date;
  city: string;
  state: string;
  bio: string;
  photos: Photo[];
}

