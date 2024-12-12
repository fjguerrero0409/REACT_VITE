import { User } from '../interfaces/request.response'

interface Props {
    user: User
}

export default function UserRow({ user }: Props) {
    return (
        <tr key={user.id}>
            <td>
                <img src={user.avatar} />
            </td>
            <td>
                <span>{user.first_name} {user.last_name}</span>
            </td>
            <td>
                <span>{user.email}</span>
            </td>
        </tr>
    )
}