import { SongInfo } from '../../NetworkHandler/NetworkRequests'
import { ListItemProps } from '../components/ListItem/ListItem.interface'

export interface MusicListViewProps {
    songInfo?: [SongInfo]
}
