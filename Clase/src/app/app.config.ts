import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient()
  ]
};

/* [{
  "id": 1,
  "name": "Leanne Graham",
  "username": "LeGra",
  "email": "legra@gmail.com",
  "image": "https://i.pravatar.cc/150?img=1"
},
{
  "id": 2,
  "name": "Carlos Mendoza",
  "username": "CarMen",
  "email": "cmendoza@yahoo.com",
  "image": "https://i.pravatar.cc/150?img=11"
},
{
  "id": 3,
  "name": "Sofia Reyes",
  "username": "SofiR",
  "email": "sreyes@hotmail.com",
  "image": "https://i.pravatar.cc/150?img=5"
},
{
  "id": 4,
  "name": "David Smith",
  "username": "DaveS",
  "email": "dsmith@gmail.com",
  "image": "https://i.pravatar.cc/150?img=12"
},
{
  "id": 5,
  "name": "Lucía Fernández",
  "username": "LuFer",
  "email": "lucia.fer@empresa.com",
  "image": "https://i.pravatar.cc/150?img=9"
},
{
  "id": 6,
  "name": "Mateo López",
  "username": "MattL",
  "email": "mlopez99@gmail.com",
  "image": "https://i.pravatar.cc/150?img=15"
},
{
  "id": 7,
  "name": "Elena Martínez",
  "username": "EleMar",
  "email": "elena.martinez@outlook.com",
  "image": "https://i.pravatar.cc/150?img=20"
}
] */