export type Project = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  summary: string;
  status?: string;
  period?: string;
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
    category: "Aplikasi e-Government",
    headline: "Sistem layanan publik dengan alur data yang saling terhubung.",
    summary:
      "Project aplikasi layanan publik dengan CRUD dan validasi, master layanan serta instansi, persyaratan, dokumen, approval, dan API untuk dashboard SIPP terpisah.",
    images: [],
    stack: ["PHP", "Laravel", "Blade", "MySQL", "REST API"],
    challenge: "",
    contribution: [],
    features: [],
    detailAvailable: false,
  },
  {
    slug: "satu-rumah",
    name: "SATU-RUMAH",
    category: "Mobile Application",
    headline: "Prototype mobile dengan workflow berbasis peran.",
    summary:
      "Prototype Flutter untuk developer perumahan, admin, dan field monitoring dengan workflow pengajuan, verifikasi, penugasan, pelaporan, bukti foto, serta Berita Acara.",
    images: [],
    stack: ["Flutter"],
    challenge: "",
    contribution: [],
    features: [],
    detailAvailable: false,
  },
  {
    slug: "bantubeasiswa",
    name: "BantuBeasiswa",
    category: "Education Platform",
    headline: "Akses informasi beasiswa yang lebih dekat untuk wilayah 3T.",
    summary:
      "Katalog beasiswa terintegrasi dengan pencarian berbasis wilayah dan pendekatan aksesibilitas WCAG.",
    status: "Work in Progress",
    period: "2026",
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
      "Antarmuka berorientasi WCAG",
    ],
    detailAvailable: true,
  },
  {
    slug: "trashmana",
    name: "Trashmana",
    category: "Waste Management System",
    headline: "Satu alur digital untuk warga, bank sampah, petugas, dan UMKM.",
    summary:
      "Platform manajemen sampah untuk pelaporan, penjemputan, operasional, serta marketplace produk daur ulang.",
    status: "Beta",
    period: "2025 — 2026",
    role: "Project Manager & Lead Contributor",
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
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Blade", "Tailwind CSS", "Leaflet.js"],
    challenge:
      "Pengelolaan sampah komunitas sering terhambat oleh pelaporan yang terpisah dan koordinasi yang tidak jelas antara warga, pengelola bank sampah, petugas lapangan, dan pelaku UMKM.",
    contribution: [
      "Memimpin perencanaan proyek sekaligus menjadi kontributor utama pengembangan.",
      "Merancang sistem role-based untuk lima jenis pengguna dengan kebutuhan berbeda.",
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
