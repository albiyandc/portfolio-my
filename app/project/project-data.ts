export type Project = {
  slug: string;
  name: string;
  category: string;
  platform: "web" | "mobile";
  headline: string;
  summary: string;
  role?: string;
  cover?: string;
  images: string[];
  stack: string[];
  challenge: string;
  contribution: string[];
  features: string[];
  detailAvailable: boolean;
};

export const projectData: Project[] = [
  {
    slug: "simat-sipp",
    name: "SIMAT-SIPP",
    category: "Aplikasi pemerintahan",
    platform: "web",
    headline: "Modul pelayanan publik dengan data yang terhubung ke SIPP.",
    summary:
      "Modul Pelayanan Publik pada SIMAT yang mencakup CRUD, validasi, master layanan, instansi, persyaratan, dokumen, dan alur persetujuan. Data layanan tersedia melalui REST API untuk dashboard SIPP terpisah.",
    role: "Peserta Magang Aptika dan Koordinator Proyek",
    cover: "/projects/simat_sipp/Screenshot 2026-09-18 023244.webp",
    images: [
      "/projects/simat_sipp/Screenshot 2026-09-18 023244.webp",
      "/projects/simat_sipp/Screenshot 2026-09-17 125808.webp",
      "/projects/simat_sipp/Screenshot 2026-09-17 125820.webp",
      "/projects/simat_sipp/Screenshot 2026-09-17 125830.webp",
      "/projects/simat_sipp/Screenshot 2026-09-17 125945.webp",
      "/projects/simat_sipp/screencapture-2026-09-17-13_00_20.webp",
    ],
    stack: ["PHP", "Laravel", "Blade", "MySQL", "REST API"],
    challenge:
      "SIMAT membutuhkan modul Pelayanan Publik untuk mengelola layanan, instansi, persyaratan, dokumen, dan alur persetujuan. Data SIMAT juga perlu tersedia untuk dashboard SIPP terpisah melalui API.",
    contribution: [
      "Mengembangkan modul web Pelayanan Publik pada SIMAT.",
      "Mengimplementasikan CRUD dan validasi untuk master layanan, instansi, persyaratan, dan dokumen.",
      "Menyusun struktur serta relasi data SIMAT-SIPP.",
      "Mengembangkan REST API untuk dashboard pelayanan publik terpisah.",
      "Menerjemahkan kebutuhan sistem dan membagi tugas sebagai Koordinator Proyek bagi tim lintas kampus.",
    ],
    features: [
      "CRUD dan validasi layanan publik",
      "Master layanan dan instansi",
      "Persyaratan dan dokumen",
      "Alur persetujuan",
      "REST API untuk dashboard SIPP",
    ],
    detailAvailable: true,
  },
  {
    slug: "satu-rumah",
    name: "SATU-RUMAH",
    category: "Aplikasi mobile",
    platform: "mobile",
    headline: "Prototipe monitoring perumahan untuk tiga peran pengguna.",
    summary:
      "Prototipe Flutter untuk pengembang perumahan, admin, dan tim monitoring lapangan dengan alur pengajuan, verifikasi, penugasan, pelaporan, bukti foto, serta Berita Acara.",
    role: "Koordinator Proyek dan Kontributor Pengembangan",
    cover: "/projects/satu_rumah/Screenshot 2026-09-18 011506.png",
    images: [
      "/projects/satu_rumah/Screenshot 2026-09-18 011453.png",
      "/projects/satu_rumah/Screenshot 2026-09-18 011506.png",
      "/projects/satu_rumah/Screenshot 2026-09-18 011535.png",
      "/projects/satu_rumah/Screenshot 2026-09-18 011610.png",
      "/projects/satu_rumah/Screenshot 2026-09-18 011638.png",
      "/projects/satu_rumah/Screenshot 2026-09-18 011651.png",
      "/projects/satu_rumah/Screenshot 2026-09-18 011701.png",
    ],
    stack: ["Flutter"],
    challenge:
      "Prototipe SATU-RUMAH perlu menampung alur pengajuan, verifikasi, penugasan monitoring, pelaporan, bukti foto, dan Berita Acara untuk pengembang perumahan, admin, serta tim monitoring lapangan.",
    contribution: [
      "Mengembangkan prototipe aplikasi untuk pengembang perumahan, admin, dan tim monitoring lapangan.",
      "Merancang antarmuka, navigasi, dan alur kerja pengajuan serta verifikasi.",
      "Menyusun alur penugasan monitoring, pelaporan, bukti foto, dan Berita Acara.",
      "Menerapkan logika interaksi dan pembagian akses berdasarkan peran pengguna.",
      "Berkontribusi pada dokumentasi sistem.",
    ],
    features: [
      "Pengajuan dan verifikasi perumahan",
      "Penugasan monitoring lapangan",
      "Pelaporan hasil monitoring",
      "Bukti foto",
      "Berita Acara",
      "Akses berdasarkan peran pengguna",
    ],
    detailAvailable: true,
  },
  {
    slug: "bantubeasiswa",
    name: "BantuBeasiswa",
    category: "Platform pendidikan",
    platform: "web",
    headline: "Pencarian beasiswa berdasarkan wilayah.",
    summary:
      "Katalog beasiswa dengan pencarian berbasis wilayah.",
    role: "Programmer",
    cover: "/projects/bantubeasiswa/screen-2.png",
    images: [
      "/projects/bantubeasiswa/screen-1.png",
      "/projects/bantubeasiswa/screen-2.png",
      "/projects/bantubeasiswa/screen-3.png",
      "/projects/bantubeasiswa/screen-4.png",
      "/projects/bantubeasiswa/screen-5.png",
    ],
    stack: ["Next.js", "React", "MySQL", "Figma", "Git/GitHub"],
    challenge:
      "Informasi beasiswa di Indonesia tersebar di banyak platform. Kondisi ini membuat pencarian peluang pendidikan menjadi lebih berat, terutama bagi masyarakat di wilayah Tertinggal, Terdepan, dan Terluar.",
    contribution: [
      "Mengembangkan fitur sistem dan menerjemahkan rancangan antarmuka menjadi halaman aplikasi.",
      "Menyusun alur pencarian beasiswa berdasarkan wilayah dan kebutuhan pengguna.",
      "Mengimplementasikan fitur input dan manajemen rekening bank untuk penerima beasiswa dalam sistem pencairan dana.",
      "Berkolaborasi dalam tim melalui Git/GitHub dan proses pengembangan terstruktur.",
    ],
    features: [
      "Katalog beasiswa terpusat",
      "Pencarian dan filter berbasis wilayah",
      "Detail persyaratan dan tenggat",
    ],
    detailAvailable: true,
  },
  {
    slug: "trashmana",
    name: "Trashmana",
    category: "Sistem pengelolaan sampah",
    platform: "web",
    headline: "Satu alur untuk pelaporan dan operasional pengelolaan sampah.",
    summary:
      "Platform pengelolaan sampah untuk pelaporan, penjemputan, operasional, serta pasar produk daur ulang.",
    role: "Manajer proyek dan kontributor utama",
    cover: "/projects/trashmana/screen-1.png",
    images: [
      "/projects/trashmana/screen-1.png",
      "/projects/trashmana/screen-2.png",
      "/projects/trashmana/screen-3.png",
      "/projects/trashmana/screen-4.png",
      "/projects/trashmana/screen-5.png",
      "/projects/trashmana/screen-6.png",
      "/projects/trashmana/screen-7.png",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS", "Leaflet.js"],
    challenge:
      "Pengelolaan sampah komunitas sering terhambat oleh pelaporan yang terpisah dan koordinasi yang tidak jelas antara warga, pengelola bank sampah, petugas lapangan, dan pelaku UMKM.",
    contribution: [
      "Memimpin perencanaan proyek sekaligus menjadi kontributor utama pengembangan.",
      "Merancang sistem berbasis peran untuk lima jenis pengguna dengan kebutuhan berbeda.",
      "Mengembangkan alur pelaporan, penjemputan, dan pelacakan status operasional.",
      "Mengintegrasikan input lokasi berbasis peta menggunakan Leaflet.js.",
    ],
    features: [
      "Pelaporan masalah sampah",
      "Pengajuan dan pelacakan penjemputan",
      "Dashboard operasional bank sampah",
      "Penugasan petugas lapangan",
      "Marketplace produk daur ulang",
      "Input lokasi berbasis peta",
    ],
    detailAvailable: true,
  },
];

export function getProject(slug: string) {
  return projectData.find((project) => project.slug === slug);
}
