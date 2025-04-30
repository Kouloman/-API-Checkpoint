import React, { useState } from 'react';

const Filter = ({ setFilterTitle, setFilterNote, onAddMovie }) => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie({ title, description, posterURL, note: parseFloat(note) });
        setTitle('');
        setDescription('');
        setPosterURL('');
        setNote('');
    };

    return (
        <div>
            <h2> Filtrer les Films</h2>
            <input
                type="text"
                placeholder="Filtrer par titre"
                onChange={(e) => setFilterTitle(e.target.value)}
            />
            <input
                type="number"
                placeholder="Filtrer par note"
                onChange={(e) => setFilterNote(e.target.value)}
            />

            <h2> Ajouter un Film</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="URL du poster"
                    value={posterURL}
                    onChange={(e) => setPosterURL(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    required
                    step="0.1"
                    min="0"
                    max="10"
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default Filter;
