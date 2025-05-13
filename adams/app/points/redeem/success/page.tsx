import Image from 'next/image';
import Link from 'next/link';

export default function RedemptionSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <div className="flex items-center mb-8">
        <Link href="/points" className="text-blue-600 hover:text-blue-800 text-lg font-bold mr-4">
          &lt;
        </Link>
        <h1 className="text-2xl font-bold text-center flex-1">Redeem</h1>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-6">Exchange Successful!</h2>
      </div>

      {/* QR Code Section */}
      <div className="bg-white p-6 rounded-lg text-center mb-8">
        <div className="mx-auto w-48 h-48 bg-gray-100 flex items-center justify-center mb-4">
          {/* QR Code Placeholder - Replace with actual QR code */}
          <p className="text-gray-500 text-sm">[QR Code Image]</p>
          {/* Developer should replace with: */}
          {/* <Image 
            src="/path-to-qr-code.png" 
            alt="Redemption QR Code"
            width={192}
            height={192}
            className="w-full h-auto"
          /> */}
        </div>
        <p className="text-sm text-gray-700">
          Visit your nearest Indomaret & show code to cashier to redeem your reward!
        </p>
      </div>
    </div>
  );
}