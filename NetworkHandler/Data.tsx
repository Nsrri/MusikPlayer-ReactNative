export interface Music {
    albums: Albums,
    artists: Artists,
    episodes: Episodes,
    genres: Genres,
    playlists:Playlists,
    podcasts: Podcasts,
    topResults: TopResults,
    tracks: Tracks,
    users: Users,
}

export interface Albums {
    totalCount: number,
    items: {
       data: {
        uri: string,
        name: string,
        artists: {
            items: {
              uri: string,
              profile: {
                name: string
              }
            }[]
        },
        coverArt: {
          sources: [Sources]
        },
        date: {
            year: number
        }
       }
      }[]
};

export interface Artists {
    totalCount: number,
    items: {
      data: {
        uri: string,
        profile: Profile,
        visuals: Visuals,
        }
      }[]
    };

export interface Episodes {
    totalCount: number,
    items: {
      data: {
        uri: string,
        name: string,
        coverArt: CoverArt,
        duration: Duration,
        releaseDate: {
            isoString: String
        },
        podcast: {
            coverArt: CoverArt
        },
        description: string,
        contentRating: ContentRating
      }
    }[]
};

export interface Genres {
    totalCount: number,
    items: {
      data: {
        uri: string,
        name: string,
        image: {
           sources: [Sources]
        }
      }
    }[]
};

export interface Playlists {
    totalCount: number,
    items: {
      data: {
        uri: string,
        name: string,
        description: string
        images: Images,
        owner: Owner
      }
    }[]
}

export interface Podcasts {
    totalCount: number,
    items: {
      data: {
        uri: string,
        name: string,
        coverArt: CoverArt,
        type: string,
        publisher: {
            name: string
        },
        mediaType: string
      }
    }[]
};


export interface TopResults {
    items: {
      data: {
        uri: string,
        profile: Profile,
        visuals: Visuals,
        
      }
    }[],
    featured: {
        data:{
            uri: string,
            name: string,
            description: string ,
            images: Images,
            owner: Owner
        }

    }[]
}

export interface Tracks {
    totalCount: number,
    items: {
      data: {
        uri: string,
        id: string,
        name: string,
        albumOfTrack:{
            uri: string,
            name: string,
            coverArt: CoverArt,
            id: string,
            sharingInfo: {
                shareUrl:string
            }
        }
        artists: {
            items: {
               uri: string,
               profile: Profile
            }[]
        }
        contentRating: ContentRating,
        duration: Duration
        playability: {
            playable: Boolean
        }
      }
    }[]
};

export interface Users {
    totalCount: number,
    items: {
      data: {
        uri: "String",
        id: "String",
        displayName: "String",
        username: "String",
        image: {
            smallImageUrl: string
            largeImageUrl: string
        }
      }
    }[]
};


export interface Sources {
        url: string,
        width: number,
        height: number
}

export interface CoverArt {
    sources: [Sources]
}

export interface Profile {
    name: string
}


export interface Visuals {
    sources: [Sources]
};

export interface Images {
    items: {
        sources: [Sources]
       }[]
};

export interface Owner {
    name: string
};

export interface ContentRating {
    label: string
};

export interface Duration {
    totalMilliseconds: number
};