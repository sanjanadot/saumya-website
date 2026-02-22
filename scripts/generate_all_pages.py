#!/usr/bin/env python3
import os
import sys

def create_page(slug: str, title: str, location: str):
    """Create a single page file"""
    base_dir = "src/app"
    page_dir = os.path.join(base_dir, slug)
    os.makedirs(page_dir, exist_ok=True)
    
    content = f'''\"use client\";

export default function Page() {{
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50\">
      {{/* Navigation */}}
      <nav className=\"sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"flex justify-between items-center h-16\">
            <div className=\"flex items-center gap-2\">
              <div className=\"w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center text-white font-bold\">S</div>
              <span className=\"text-xl font-bold text-pink-600\">Saumya</span>
            </div>
          </div>
        </div>
      </nav>

      {{/* Hero Section */}}
      <section className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20\">
        <h1 className=\"text-5xl md:text-6xl font-bold text-gray-900 mb-6\">
          {title} <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700\">in {location}</span>
        </h1>
        
        <p className=\"text-xl text-gray-600 mb-8 leading-relaxed\">
          Welcome to our {location} {title} page. Premium, verified, and discreet escort services available 24/7.
        </p>

        <p className=\"text-lg text-gray-600 mb-8\">
          Customize this page with unique content for {location}.
        </p>

        <div className=\"p-6 bg-white rounded-lg shadow\">
          <h2 className=\"font-bold text-lg mb-4\">About Our Service</h2>
          <p className=\"text-gray-600\">Add your custom content here. Include pricing, availability, service descriptions, testimonials, and special offers.</p>
        </div>
      </section>

      {{/* Footer */}}
      <footer className=\"bg-gray-900 text-gray-300 py-12 border-t border-gray-800\">
        <div className=\"max-w-7xl mx-auto px-4 text-center\">
          <p className=\"text-sm\">© 2026 Saumya Escorts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}}
'''
    
    page_file = os.path.join(page_dir, "page.tsx")
    with open(page_file, 'w') as f:
        f.write(content)
    
    return page_file

# All pages to create
pages_data = [
    # Escorts locations
    ("escorts-ambernath", "Escorts", "Ambernath"),
    ("escorts-ambivali", "Escorts", "Ambivali"),
    ("escorts-andheri", "Escorts", "Andheri"),
    ("escorts-asangaon", "Escorts", "Asangaon"),
    ("escorts-badlapur", "Escorts", "Badlapur"),
    ("escorts-bandra", "Escorts", "Bandra"),
    ("escorts-belapur", "Escorts", "Belapur"),
    ("escorts-bhandup", "Escorts", "Bhandup"),
    ("escorts-bhayander", "Escorts", "Bhayander"),
    ("escorts-bhiwandi", "Escorts", "Bhiwandi"),
    ("escorts-boisar", "Escorts", "Boisar"),
    ("escorts-borivali", "Escorts", "Borivali"),
    ("escorts-byculla", "Escorts", "Byculla"),
    ("escorts-cbd", "Escorts", "CBD"),
    ("escorts-cbd-belapur", "Escorts", "CBD Belapur"),
    ("escorts-chembur", "Escorts", "Chembur"),
    ("escorts-churchgate", "Escorts", "Churchgate"),
    ("escorts-colaba", "Escorts", "Colaba"),
    ("escorts-cst", "Escorts", "CST"),
    ("escorts-dadar", "Escorts", "Dadar"),
    ("escorts-dahisar", "Escorts", "Dahisar"),
    ("escorts-diva", "Escorts", "Diva"),
    ("escorts-dombivali", "Escorts", "Dombivali"),
    ("escorts-ghansoli", "Escorts", "Ghansoli"),
    ("escorts-ghatkopar", "Escorts", "Ghatkopar"),
    ("escorts-goregaon", "Escorts", "Goregaon"),
    ("escorts-govandi", "Escorts", "Govandi"),
    ("escorts-grant-road", "Escorts", "Grant Road"),
    ("escorts-jogeshwari", "Escorts", "Jogeshwari"),
    ("escorts-juhu", "Escorts", "Juhu"),
    ("escorts-juinagar", "Escorts", "Juinagar"),
    ("escorts-kalamboli", "Escorts", "Kalamboli"),
    ("escorts-kalwa", "Escorts", "Kalwa"),
    ("escorts-kalyan", "Escorts", "Kalyan"),
    ("escorts-kamothe", "Escorts", "Kamothe"),
    ("escorts-kandivali", "Escorts", "Kandivali"),
    ("escorts-kanjurmarg", "Escorts", "Kanjurmarg"),
    ("escorts-karjat", "Escorts", "Karjat"),
    ("escorts-kasara", "Escorts", "Kasara"),
    ("escorts-khar", "Escorts", "Khar"),
    ("escorts-kharghar", "Escorts", "Kharghar"),
    ("escorts-khar-road", "Escorts", "Khar Road"),
    ("escorts-khopoli", "Escorts", "Khopoli"),
    ("escorts-kopar-khairane", "Escorts", "Kopar Khairane"),
    ("escorts-kurla", "Escorts", "Kurla"),
    ("escorts-lokhandwala", "Escorts", "Lokhandwala"),
    ("escorts-lower-parel", "Escorts", "Lower Parel"),
    ("escorts-mahalaxmi", "Escorts", "Mahalaxmi"),
    ("escorts-mahim", "Escorts", "Mahim"),
    ("escorts-malad", "Escorts", "Malad"),
    ("escorts-mankhurd", "Escorts", "Mankhurd"),
    ("escorts-marine-lines", "Escorts", "Marine Lines"),
    ("escorts-matunga", "Escorts", "Matunga"),
    ("escorts-miraroad", "Escorts", "Miraroad"),
    ("escorts-mulund", "Escorts", "Mulund"),
    ("escorts-mumbai-airport", "Escorts", "Mumbai Airport"),
    ("escorts-mumbai-central", "Escorts", "Mumbai Central"),
    ("escorts-mumbra", "Escorts", "Mumbra"),
    ("escorts-nahur", "Escorts", "Nahur"),
    ("escorts-naigaon", "Escorts", "Naigaon"),
    ("escorts-nalasopara", "Escorts", "Nalasopara"),
    ("escorts-navi-mumbai", "Escorts", "Navi Mumbai"),
    ("escorts-neral", "Escorts", "Neral"),
    ("escorts-nerul", "Escorts", "Nerul"),
    ("escorts-palghar", "Escorts", "Palghar"),
    ("escorts-panvel", "Escorts", "Panvel"),
    ("escorts-powai", "Escorts", "Powai"),
    ("escorts-parel", "Escorts", "Parel"),
    ("escorts-prabhadevi", "Escorts", "Prabhadevi"),
    ("escorts-rabale", "Escorts", "Rabale"),
    ("escorts-sakinaka", "Escorts", "Sakinaka"),
    ("escorts-sanpada", "Escorts", "Sanpada"),
    ("escorts-santacruz", "Escorts", "Santacruz"),
    ("escorts-saphale", "Escorts", "Saphale"),
    ("escorts-seawood", "Escorts", "Seawood"),
    ("escorts-sion", "Escorts", "Sion"),
    ("escorts-thakurli", "Escorts", "Thakurli"),
    ("escorts-thane", "Escorts", "Thane"),
    ("escorts-titwala", "Escorts", "Titwala"),
    ("escorts-turbhe", "Escorts", "Turbhe"),
    ("escorts-ulhasnagar", "Escorts", "Ulhasnagar"),
    ("escorts-ulwe", "Escorts", "Ulwe"),
    ("escorts-vasai", "Escorts", "Vasai"),
    ("escorts-vashi", "Escorts", "Vashi"),
    ("escorts-versova", "Escorts", "Versova"),
    ("escorts-vidya-vihar", "Escorts", "Vidya Vihar"),
    ("escorts-vikhroli", "Escorts", "Vikhroli"),
    ("escorts-vile-parle", "Escorts", "Vile Parle"),
    ("escorts-virar", "Escorts", "Virar"),
    ("escorts-wadala", "Escorts", "Wadala"),
    ("escorts-worli", "Escorts", "Worli"),
    
    # Call girls locations
    ("call-girls-airoli", "Call Girls", "Airoli"),
    ("call-girls-ambernath", "Call Girls", "Ambernath"),
    ("call-girls-ambivali", "Call Girls", "Ambivali"),
    ("call-girls-andheri", "Call Girls", "Andheri"),
    ("call-girls-asangaon", "Call Girls", "Asangaon"),
    ("call-girls-badlapur", "Call Girls", "Badlapur"),
    ("call-girls-bandra", "Call Girls", "Bandra"),
    ("call-girls-belapur", "Call Girls", "Belapur"),
    ("call-girls-bhandup", "Call Girls", "Bhandup"),
    ("call-girls-bhayander", "Call Girls", "Bhayander"),
    ("call-girls-bhiwandi", "Call Girls", "Bhiwandi"),
    ("call-girls-boisar", "Call Girls", "Boisar"),
    ("call-girls-borivali", "Call Girls", "Borivali"),
    ("call-girls-byculla", "Call Girls", "Byculla"),
    ("call-girls-cbd", "Call Girls", "CBD"),
    ("call-girls-cbd-belapur", "Call Girls", "CBD Belapur"),
    ("call-girls-chembur", "Call Girls", "Chembur"),
    ("call-girls-churchgate", "Call Girls", "Churchgate"),
    ("call-girls-colaba", "Call Girls", "Colaba"),
    ("call-girls-cst", "Call Girls", "CST"),
    ("call-girls-dadar", "Call Girls", "Dadar"),
    ("call-girls-dahisar", "Call Girls", "Dahisar"),
    ("call-girls-diva", "Call Girls", "Diva"),
    ("call-girls-dombivali", "Call Girls", "Dombivali"),
    ("call-girls-ghansoli", "Call Girls", "Ghansoli"),
    ("call-girls-ghatkopar", "Call Girls", "Ghatkopar"),
    ("call-girls-goregaon", "Call Girls", "Goregaon"),
    ("call-girls-govandi", "Call Girls", "Govandi"),
    ("call-girls-grant-road", "Call Girls", "Grant Road"),
    ("call-girls-jogeshwari", "Call Girls", "Jogeshwari"),
    ("call-girls-juhu", "Call Girls", "Juhu"),
    ("call-girls-juinagar", "Call Girls", "Juinagar"),
    ("call-girls-kalamboli", "Call Girls", "Kalamboli"),
    ("call-girls-kalwa", "Call Girls", "Kalwa"),
    ("call-girls-kalyan", "Call Girls", "Kalyan"),
    ("call-girls-kamothe", "Call Girls", "Kamothe"),
    ("call-girls-kandivali", "Call Girls", "Kandivali"),
    ("call-girls-kanjurmarg", "Call Girls", "Kanjurmarg"),
    ("call-girls-karjat", "Call Girls", "Karjat"),
    ("call-girls-kasara", "Call Girls", "Kasara"),
    ("call-girls-khar", "Call Girls", "Khar"),
    ("call-girls-kharghar", "Call Girls", "Kharghar"),
    ("call-girls-khar-road", "Call Girls", "Khar Road"),
    ("call-girls-khopoli", "Call Girls", "Khopoli"),
    ("call-girls-kopar-khairane", "Call Girls", "Kopar Khairane"),
    ("call-girls-kurla", "Call Girls", "Kurla"),
    ("call-girls-lokhandwala", "Call Girls", "Lokhandwala"),
    ("call-girls-lower-parel", "Call Girls", "Lower Parel"),
    ("call-girls-mahalaxmi", "Call Girls", "Mahalaxmi"),
    ("call-girls-mahim", "Call Girls", "Mahim"),
    ("call-girls-malad", "Call Girls", "Malad"),
    ("call-girls-mankhurd", "Call Girls", "Mankhurd"),
    ("call-girls-marine-lines", "Call Girls", "Marine Lines"),
    ("call-girls-matunga", "Call Girls", "Matunga"),
    ("call-girls-miraroad", "Call Girls", "Miraroad"),
    ("call-girls-mulund", "Call Girls", "Mulund"),
    ("call-girls-mumbai-airport", "Call Girls", "Mumbai Airport"),
    ("call-girls-mumbai-central", "Call Girls", "Mumbai Central"),
    ("call-girls-mumbra", "Call Girls", "Mumbra"),
    ("call-girls-nahur", "Call Girls", "Nahur"),
    ("call-girls-naigaon", "Call Girls", "Naigaon"),
    ("call-girls-nalasopara", "Call Girls", "Nalasopara"),
    ("call-girls-navi-mumbai", "Call Girls", "Navi Mumbai"),
    ("call-girls-neral", "Call Girls", "Neral"),
    ("call-girls-nerul", "Call Girls", "Nerul"),
    ("call-girls-palghar", "Call Girls", "Palghar"),
    ("call-girls-panvel", "Call Girls", "Panvel"),
    ("call-girls-powai", "Call Girls", "Powai"),
    ("call-girls-parel", "Call Girls", "Parel"),
    ("call-girls-prabhadevi", "Call Girls", "Prabhadevi"),
    ("call-girls-rabale", "Call Girls", "Rabale"),
    ("call-girls-sakinaka", "Call Girls", "Sakinaka"),
    ("call-girls-sanpada", "Call Girls", "Sanpada"),
    ("call-girls-santacruz", "Call Girls", "Santacruz"),
    ("call-girls-saphale", "Call Girls", "Saphale"),
    ("call-girls-seawood", "Call Girls", "Seawood"),
    ("call-girls-sion", "Call Girls", "Sion"),
    ("call-girls-thakurli", "Call Girls", "Thakurli"),
    ("call-girls-thane", "Call Girls", "Thane"),
    ("call-girls-titwala", "Call Girls", "Titwala"),
    ("call-girls-turbhe", "Call Girls", "Turbhe"),
    ("call-girls-ulhasnagar", "Call Girls", "Ulhasnagar"),
    ("call-girls-ulwe", "Call Girls", "Ulwe"),
    ("call-girls-vasai", "Call Girls", "Vasai"),
    ("call-girls-vashi", "Call Girls", "Vashi"),
    ("call-girls-versova", "Call Girls", "Versova"),
    ("call-girls-vidya-vihar", "Call Girls", "Vidya Vihar"),
    ("call-girls-vikhroli", "Call Girls", "Vikhroli"),
    ("call-girls-vile-parle", "Call Girls", "Vile Parle"),
    ("call-girls-virar", "Call Girls", "Virar"),
    ("call-girls-wadala", "Call Girls", "Wadala"),
    ("call-girls-worli", "Call Girls", "Worli"),
    
    # Categories
    ("teen-escorts", "Teen Escorts", "Mumbai"),
    ("vip-escorts", "VIP Escorts", "Mumbai"),
    ("housewife-escorts", "Housewife Escorts", "Mumbai"),
    ("independent-escorts", "Independent Escorts", "Mumbai"),
    ("unsatisfied-escorts", "Unsatisfied Escorts", "Mumbai"),
    ("marwadi-escorts", "Marwadi Escorts", "Mumbai"),
    ("college-escorts", "College Escorts", "Mumbai"),
    ("actress-escorts", "Actress Escorts", "Mumbai"),
    ("foreigner-escorts", "Foreigner Escorts", "Mumbai"),
    ("russian-escorts", "Russian Escorts", "Mumbai"),
    ("muslim-escorts", "Muslim Escorts", "Mumbai"),
    ("hifi-escorts", "HIFI Escorts", "Mumbai"),
    ("shemale-escorts", "Shemale Escorts", "Mumbai"),
    ("marathi-escorts", "Marathi Escorts", "Mumbai"),
    ("gujarati-escorts", "Gujarati Escorts", "Mumbai"),
    ("air-hostess-escorts", "Air Hostess Escorts", "Mumbai"),
    ("hot-bhabhi", "Hot Bhabhi", "Mumbai"),
    ("punjabi-escorts", "Punjabi Escorts", "Mumbai"),
    ("jaat-escorts", "Jaat Escorts", "Mumbai"),
    ("north-indian-escorts", "North Indian Escorts", "Mumbai"),
    ("bengali-escorts", "Bengali Escorts", "Mumbai"),
    ("south-indian-escorts", "South Indian Escorts", "Mumbai"),
    ("lesbian-escorts", "Lesbian Escorts", "Mumbai"),
    
    # Info pages
    ("about", "About", "Saumya"),
    ("contact", "Contact", "Saumya"),
    ("gallery", "Gallery", "Saumya"),
    ("location", "Locations", "Saumya"),
    ("service", "Services", "Saumya"),
]

if __name__ == "__main__":
    print(f"Creating {len(pages_data)} pages...")
    count = 0
    errors = 0
    
    for slug, title, location in pages_data:
        try:
            create_page(slug, title, location)
            count += 1
            if count % 10 == 0:
                print(f"  Created {count} pages...")
        except Exception as e:
            errors += 1
            print(f"  ERROR creating {slug}: {e}")
    
    print(f"\n✅ Successfully created {count} pages!")
    if errors:
        print(f"⚠️  {errors} errors occurred")
    else:
        print("🎉 All pages created successfully!")
