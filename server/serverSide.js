// MusicMachine.remove({});
console.log(MusicMachine.find({}).fetch());
if (MusicMachine.find().count() === 0) {
	MusicMachine.insert({slide: 50});
}
