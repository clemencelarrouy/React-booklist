import React from 'react'

export default function Cover({ url, title }) {
    return url ? <img src={url} alt={title} /> : <>Url manquante</>;
}
