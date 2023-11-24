import '@styles/detail_diary.css'

export default function DiaryPost ({ params }) {
    const { judul, isi } = params;

    return (
        <div className="detail-diary">
          <h1>{decodeURIComponent(judul)}</h1>
          <p>{decodeURIComponent(isi)}</p>
        </div>
    );
}