export const Podcast = ({ episode }) => {
     return (
          <iframe src={`https://open.spotify.com/embed/episode/${episode}`} width="100%" height="232" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">

          </iframe>
     )
}