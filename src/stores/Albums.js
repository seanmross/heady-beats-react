import { observable } from 'mobx'

class AlbumStore {
    @observable albums = [
        { id: 1, albumTitle: "Scary Hours", albumCover: "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180", artist: "Drake", song: "God's Plan", year:"2018" },
        { id: 2, albumTitle: "More Life", albumCover: "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180", artist: "Drake, Young Thug", song: "Ice Melts", year:"2017" }
    ]
}

export default new AlbumStore()