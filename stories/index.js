import { storiesOf } from '@storybook/angular';
import { UserComponent } from "../src/app/users/user/user.component";

storiesOf('UserComponent', module)
  .add('with user with infos', () => ({
    component: UserComponent,
    props: {
      user: { id: 1, firstName: 'toto', lastName: 'taot' },
    },
  }))
  .add('with user without infos', () => ({
    component: UserComponent,
    props: {
      user: { id: 1, firstName: '', lastName: '' },
    },
  }));
