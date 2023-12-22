
interface AudioPlayer {
    AudioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}
interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    AudioVolume: 90,
    songDuration: 30,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
    },
}
console.log('Song: ',audioPlayer.song);
export { }=audioPlayer;