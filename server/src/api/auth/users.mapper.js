import { addCreationAndUpdatingDate } from '../../utils/entities';

export default user => ({
  id: user._id,
  status: user.status,
  ...addCreationAndUpdatingDate(user)
})
