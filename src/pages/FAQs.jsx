import { useCallback } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import Accordion1 from "../components/Accordion1";
import Accordion from "../components/Accordion";
import FooterColor from "../components/FooterColor";
import "./FAQs.css";

const FAQs = () => {
  const onFacebookIconClick = useCallback(() => {
    window.open("https://id-id.facebook.com/");
  }, []);

  const onMessengerIconClick = useCallback(() => {
    window.open("https://www.messenger.com/");
  }, []);

  const onTelegramIconClick = useCallback(() => {
    window.open("https://web.telegram.org/");
  }, []);

  return (
    <div className="faqs">
      <main className="frame-main">
        <FrameComponent6 />
        <section className="frame-section">
          <div className="frame-parent15">
            <div className="frame-wrapper10">
              <div className="frame-parent16">
                <div className="panduan-wrapper">
                  <h3 className="panduan">Panduan</h3>
                </div>
                <h1 className="pilih-topik-sesuai">
                  Pilih Topik Sesuai Kendala Penyewaanmu
                </h1>
              </div>
            </div>
            <div className="frame-wrapper11">
              <div className="searchbar-parent">
                <div className="searchbar">
                  <div className="searchbar-child" />
                  <img
                    className="akun-3-icon"
                    loading="lazy"
                    alt=""
                    src="/akun-3@2x.png"
                  />
                  <div className="akun-dan-keamanan-wrapper">
                    <b className="akun-dan-keamanan">{`Akun dan Keamanan `}</b>
                  </div>
                </div>
                <div className="searchbar1">
                  <div className="searchbar-item" />
                  <img
                    className="pembayaran-1-icon"
                    loading="lazy"
                    alt=""
                    src="/pembayaran-1@2x.png"
                  />
                  <div className="pembayaran-wrapper">
                    <b className="pembayaran">Pembayaran</b>
                  </div>
                </div>
                <div className="searchbar2">
                  <div className="searchbar-inner" />
                  <img
                    className="penggelapan-1-icon"
                    loading="lazy"
                    alt=""
                    src="/penggelapan-1@2x.png"
                  />
                  <div className="penipuan-penggelapan-wrapper">
                    <b className="penipuan-penggelapan">{`Penipuan & Penggelapan`}</b>
                  </div>
                </div>
                <div className="searchbar3">
                  <div className="searchbar-child1" />
                  <img
                    className="pengembalian-1-icon"
                    loading="lazy"
                    alt=""
                    src="/pengembalian-1@2x.png"
                  />
                  <div className="pengembalian-dana-wrapper">
                    <b className="pengembalian-dana">Pengembalian Dana</b>
                  </div>
                </div>
                <div className="searchbar4">
                  <div className="searchbar-child2" />
                  <img
                    className="informasi-1-icon"
                    loading="lazy"
                    alt=""
                    src="/informasi-1@2x.png"
                  />
                  <div className="informasi-umum-wrapper">
                    <b className="informasi-umum">Informasi Umum</b>
                  </div>
                </div>
                <div className="searchbar5">
                  <div className="searchbar-child3" />
                  <b className="lainnya">Lainnya</b>
                </div>
                <img
                  className="lainnya-1-icon"
                  loading="lazy"
                  alt=""
                  src="/lainnya-1@2x.png"
                />
              </div>
            </div>
            <div className="frame-wrapper12">
              <div className="frame-parent17">
                <div className="frequently-asked-question-wrapper">
                  <h3 className="frequently-asked-question">
                    Frequently Asked Question
                  </h3>
                </div>
                <h1 className="pertanyaan-yang-sering">
                  Pertanyaan yang Sering Diajukan
                </h1>
              </div>
            </div>
            <div className="frame-wrapper13">
              <div className="accordion-parent">
                <Accordion1
                  pertanyaanYangSeringMuncu="Bagaimana cara menyewa barang di Zerent?"
                  vector205="/vector-205.svg"
                  loremIpsumDolorSitAmetCon="Anda bisa menyewa barang di Zerent dengan membuat akun terlebih dahulu, memilih barang yang diinginkan, melakukan pembayaran menggunakan QRIS yang kami sediakan, menentukan opsi pengiriman dan mendiskusikannya dengan toko, dan mengembalikannya setelah masa sewa berakhir."
                />
                <Accordion
                  pertanyaanYangSeringMuncu="Bagaimana jika barang yang sedang disewa rusak ketika sedang digunakan?"
                  vector205="/vector-205-1.svg"
                  loremIpsumDolorSitAmetCon="Jika sebelumnya barang yang disewa tidak terdapat kerusakan apapun, kemudian rusak ketika sedang digunakan maka kerusakan menjadi tanggung jawab penyewa dan harus memberikan biaya ganti rugi sesuai dengan yang sudah disepakati."
                />
                <Accordion1
                  pertanyaanYangSeringMuncu="Bagaimana cara pengaduan kerusakan barang?"
                  vector205="/vector-205-2.svg"
                  loremIpsumDolorSitAmetCon="Untuk pengaduan pesanan di Zerent, Anda perlu ke halaman pesanan bagian digunakan dan laporkan kerusakan. Di sana terdapat opsi untuk membatalkan pesanan. Anda akan diarahkan untuk mengisi form pengaduan dan mengirimkannya. Anda akan mendapatkan informasi selanjutnya 2-5 hari setelah laporan diajukan."
                  propMinWidth="362px"
                />
                <Accordion1
                  pertanyaanYangSeringMuncu="Bagaimana cara pembayaran di Zerent?"
                  vector205="/vector-205-3.svg"
                  loremIpsumDolorSitAmetCon="Untuk melakukan pembayaran di Zerent, Anda dapat menggunakan QRIS sebagai metode pembayaran. Setelah Anda memilih barang yang ingin dibeli dan masuk ke proses checkout, QRIS akan ditampilkan. Anda dapat memindainya menggunakan aplikasi pembayaran digital atau dompet elektronik Anda. Setelah transaksi berhasil, tunggulah konfirmasi dari Zerent bahwa pembayaran Anda telah diterima. Dengan cara ini, Anda dapat melakukan pembayaran di Zerent dengan mudah dan cepat menggunakan QRIS."
                  propMinWidth="301px"
                />
                <Accordion
                  pertanyaanYangSeringMuncu="Apakah ada biaya tambahan yang perlu saya bayar selain biaya sewa? "
                  vector205="/vector-205-4.svg"
                  loremIpsumDolorSitAmetCon="Terdapat biaya deposit sebagai jaminan kerusakan dan kepemilikan barang. Biaya deposit ditentukan oleh penyedia barang dan penyewa wajib membayarkan harga deposit tersebut. Jaminan deposit akan dikembalikan 100% setelah penyewaan barang selesai."
                  propMinWidth="533px"
                />
                <Accordion1
                  pertanyaanYangSeringMuncu="Bagaimana cara pengambilan dan pengembalian barang yang disewa?"
                  vector205="/vector-205-5.svg"
                  loremIpsumDolorSitAmetCon="Pengambilan barang dilakukan dengan menentukan waktu dan lokasi dengan penyedia, sedangkan pengembalian dilakukan sesuai kesepakatan sebelum masa sewa berakhir"
                  propMinWidth="536px"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterColor />
    </div>
  );
};

export default FAQs;
