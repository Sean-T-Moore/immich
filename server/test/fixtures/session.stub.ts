import { SessionItem } from 'src/types';
import { userStub } from 'test/fixtures/user.stub';

export const sessionStub = {
  valid: Object.freeze<SessionItem>({
    id: 'token-id',
    token: 'auth_token',
    userId: userStub.user1.id,
    user: userStub.user1,
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date(),
    deviceType: '',
    deviceOS: '',
    updateId: 'uuid-v7',
  }),
  inactive: Object.freeze<SessionItem>({
    id: 'not_active',
    token: 'auth_token',
    userId: userStub.user1.id,
    user: userStub.user1,
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    deviceType: 'Mobile',
    deviceOS: 'Android',
    updateId: 'uuid-v7',
  }),
};
