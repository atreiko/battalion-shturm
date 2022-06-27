import { addCreationAndUpdatingDate } from "../../utils/entities";

export default user => ({
  id: user._id,
  first_name: user.first_name,
  last_name: user.last_name,
  status: user.status,
  ...addCreationAndUpdatingDate(user)
})