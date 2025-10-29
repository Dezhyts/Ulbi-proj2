import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comments';
import * as ratingCommands from './commands/rating';

// Добавляем кастомную команду Cypress
Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);
// Cypress.Commands.overwrite('intercept', () => {
//   const FIXTURE_MOVE = process.env.FIXTURE_MODE;
//   if(FIXTURE_MOVE === 'READ'){
//     const fixtureName = requestAnimationFrame.METHOD + req.url+ hash(req.body)
//     readFixture(fixtureName)

//   }
//   createFixture(fixtureName,req.body)
//   if(FIXTURE_MOVE === 'WRITE'){
//   }
// });
// cy.intercept('GET',"**/articles?*",(req)=>{

// })

// Это нужно, чтобы файл считался модулем
export {};
