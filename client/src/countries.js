
const countries = [
    {
        code: 'AC',
        name: 'Ascension Island',
        name_ar: 'ايسلندا',
        emoji: '🇦🇨'
    },
    {
        code: 'AD',
        name: 'Andorra',
        name_ar: 'أندورا',
        emoji: '🇦🇩'
    },
    {
        code: 'AE',
        name: 'United Arab Emirates',
        name_ar: 'الامارات العربية المتحدة',
        emoji: '🇦🇪'
    },
    {
        code: 'AF',
        name: 'Afghanistan',
        name_ar: 'أفغانستان',
        emoji: '🇦🇫'
    },
    {
        code: 'AG',
        name: 'Antigua & Barbuda',
        name_ar: 'أنتيجوا وبربودا',
        emoji: '🇦🇬'
    },
    {
        code: 'AI',
        name: 'Anguilla',
        name_ar: 'أنجويلا',
        emoji: '🇦🇮'
    },
    {
        code: 'AL',
        name: 'Albania',
        name_ar: 'ألبانيا',
        emoji: '🇦🇱'
    },
    {
        code: 'AM',
        name: 'Armenia',
        name_ar: 'أرمينيا',
        emoji: '🇦🇲'
    },
    {
        code: 'AO',
        name: 'Angola',
        name_ar: 'أنجولا',
        emoji: '🇦🇴'
    },
    {
        code: 'AQ',
        name: 'Antarctica',
        name_ar: 'القطب الجنوبي',
        emoji: '🇦🇶'
    },
    {
        code: 'AR',
        name: 'Argentina',
        name_ar: 'الأرجنتين',
        emoji: '🇦🇷'
    },
    {
        code: 'AS',
        name: 'American Samoa',
        name_ar: 'ساموا الأمريكية',
        emoji: '🇦🇸'
    },
    {
        code: 'AT',
        name: 'Austria',
        name_ar: 'النمسا',
        emoji: '🇦🇹'
    },
    {
        code: 'AU',
        name: 'Australia',
        name_ar: 'أستراليا',
        emoji: '🇦🇺'
    },
    {
        code: 'AW',
        name: 'Aruba',
        name_ar: 'آروبا',
        emoji: '🇦🇼'
    },
    {
        code: 'AX',
        name: 'Åland Islands',
        name_ar: 'جزر أولان',
        emoji: '🇦🇽'
    },
    {
        code: 'AZ',
        name: 'Azerbaijan',
        name_ar: 'أذربيجان',
        emoji: '🇦🇿'
    },
    {
        code: 'BA',
        name: 'Bosnia & Herzegovina',
        name_ar: 'البوسنة والهرسك',
        emoji: '🇧🇦'
    },
    {
        code: 'BB',
        name: 'Barbados',
        name_ar: 'بربادوس',
        emoji: '🇧🇧'
    },
    {
        code: 'BD',
        name: 'Bangladesh',
        name_ar: 'بنجلاديش',
        emoji: '🇧🇩'
    },
    {
        code: 'BE',
        name: 'Belgium',
        name_ar: 'بلجيكا',
        emoji: '🇧🇪'
    },
    {
        code: 'BF',
        name: 'Burkina Faso',
        name_ar: 'بوركينا فاسو',
        emoji: '🇧🇫'
    },
    {
        code: 'BG',
        name: 'Bulgaria',
        name_ar: 'بلغاريا',
        emoji: '🇧🇬'
    },
    {
        code: 'BH',
        name: 'Bahrain',
        name_ar: 'البحرين',
        emoji: '🇧🇭'
    },
    {
        code: 'BI',
        name: 'Burundi',
        name_ar: 'بوروندي',
        emoji: '🇧🇮'
    },
    {
        code: 'BJ',
        name: 'Benin',
        name_ar: 'بنين',
        emoji: '🇧🇯'
    },
    {
        code: 'BL',
        name: 'St. Barthélemy',
        emoji: '🇧🇱'
    },
    {
        code: 'BM',
        name: 'Bermuda',
        name_ar: 'برمودا',
        emoji: '🇧🇲'
    },
    {
        code: 'BN',
        name: 'Brunei',
        name_ar: 'بروناي',
        emoji: '🇧🇳'
    },
    {
        code: 'BO',
        name: 'Bolivia',
        name_ar: 'بوليفيا',
        emoji: '🇧🇴'
    },
    {
        code: 'BQ',
        name: 'Caribbean Netherlands',
        emoji: '🇧🇶'
    },
    {
        code: 'BR',
        name: 'Brazil',
        name_ar: 'البرازيل',
        emoji: '🇧🇷'
    },
    {
        code: 'BS',
        name: 'Bahamas',
        name_ar: 'الباهاما',
        emoji: '🇧🇸'
    },
    {
        code: 'BT',
        name: 'Bhutan',
        name_ar: 'بوتان',
        emoji: '🇧🇹'
    },
    {
        code: 'BV',
        name: 'Bouvet Island',
        name_ar: 'جزيرة بوفيه',
        emoji: '🇧🇻'
    },
    {
        code: 'BW',
        name: 'Botswana',
        name_ar: 'بتسوانا',
        emoji: '🇧🇼'
    },
    {
        code: 'BY',
        name: 'Belarus',
        name_ar: 'روسيا البيضاء',
        emoji: '🇧🇾'
    },
    {
        code: 'BZ',
        name: 'Belize',
        name_ar: 'بليز',
        emoji: '🇧🇿'
    },
    {
        code: 'CA',
        name: 'Canada',
        name_ar: 'كندا',
        emoji: '🇨🇦'
    },
    {
        code: 'CC',
        name: 'Cocos (Keeling) Islands',
        name_ar: 'جزر كوكوس',
        emoji: '🇨🇨'
    },
    {
        code: 'CD',
        name: 'Congo - Kinshasa',
        name_ar: 'جمهورية الكونغو الديمقراطية',
        emoji: '🇨🇩'
    },
    {
        code: 'CF',
        name: 'Central African Republic',
        name_ar: 'جمهورية افريقيا الوسطى',
        emoji: '🇨🇫'
    },
    {
        code: 'CG',
        name: 'Congo - Brazzaville',
        name_ar: 'الكونغو - برازافيل',
        emoji: '🇨🇬'
    },
    {
        code: 'CH',
        name: 'Switzerland',
        name_ar: 'سويسرا',
        emoji: '🇨🇭'
    },
    {
        code: 'CI',
        name: 'Côte d’Ivoire',
        name_ar: 'ساحل العاج',
        emoji: '🇨🇮'
    },
    {
        code: 'CK',
        name: 'Cook Islands',
        name_ar: 'جزر كوك',
        emoji: '🇨🇰'
    },
    {
        code: 'CL',
        name: 'Chile',
        name_ar: 'شيلي',
        emoji: '🇨🇱'
    },
    {
        code: 'CM',
        name: 'Cameroon',
        name_ar: 'الكاميرون',
        emoji: '🇨🇲'
    },
    {
        code: 'CN',
        name: 'China',
        name_ar: 'الصين',
        emoji: '🇨🇳'
    },
    {
        code: 'CO',
        name: 'Colombia',
        name_ar: 'كولومبيا',
        emoji: '🇨🇴'
    },
    {
        code: 'CP',
        name: 'Clipperton Island',
        emoji: '🇨🇵'
    },
    {
        code: 'CR',
        name: 'Costa Rica',
        name_ar: 'كوستاريكا',
        emoji: '🇨🇷'
    },
    {
        code: 'CU',
        name: 'Cuba',
        name_ar: 'كوبا',
        emoji: '🇨🇺'
    },
    {
        code: 'CV',
        name: 'Cape Verde',
        name_ar: 'الرأس الأخضر',
        emoji: '🇨🇻'
    },
    {
        code: 'CW',
        name: 'Curaçao',
        emoji: '🇨🇼'
    },
    {
        code: 'CX',
        name: 'Christmas Island',
        name_ar: 'جزيرة الكريسماس',
        emoji: '🇨🇽'
    },
    {
        code: 'CY',
        name: 'Cyprus',
        name_ar: 'قبرص',
        emoji: '🇨🇾'
    },
    {
        code: 'CZ',
        name: 'Czechia',
        name_ar: 'جمهورية التشيك',
        emoji: '🇨🇿'
    },
    {
        code: 'DE',
        name: 'Germany',
        name_ar: 'ألمانيا',
        emoji: '🇩🇪'
    },
    {
        code: 'DG',
        name: 'Diego Garcia',
        emoji: '🇩🇬'
    },
    {
        code: 'DJ',
        name: 'Djibouti',
        name_ar: 'جيبوتي',
        emoji: '🇩🇯'
    },
    {
        code: 'DK',
        name: 'Denmark',
        name_ar: 'الدانمرك',
        emoji: '🇩🇰'
    },
    {
        code: 'DM',
        name: 'Dominica',
        name_ar: 'دومينيكا',
        emoji: '🇩🇲'
    },
    {
        code: 'DO',
        name: 'Dominican Republic',
        name_ar: 'جمهورية الدومينيك',
        emoji: '🇩🇴'
    },
    {
        code: 'DZ',
        name: 'Algeria',
        name_ar: 'الجزائر',
        emoji: '🇩🇿'
    },
    {
        code: 'EA',
        name: 'Ceuta & Melilla',
        emoji: '🇪🇦'
    },
    {
        code: 'EC',
        name: 'Ecuador',
        name_ar: 'الاكوادور',
        emoji: '🇪🇨'
    },
    {
        code: 'EE',
        name: 'Estonia',
        name_ar: 'استونيا',
        emoji: '🇪🇪'
    },
    {
        code: 'EG',
        name: 'Egypt',
        name_ar: 'مصر',
        emoji: '🇪🇬'
    },
    {
        code: 'EH',
        name: 'Western Sahara',
        name_ar: 'الصحراء الغربية',
        emoji: '🇪🇭'
    },
    {
        code: 'ER',
        name: 'Eritrea',
        name_ar: 'اريتريا',
        emoji: '🇪🇷'
    },
    {
        code: 'ES',
        name: 'Spain',
        name_ar: 'أسبانيا',
        emoji: '🇪🇸'
    },
    {
        code: 'ET',
        name: 'Ethiopia',
        name_ar: 'اثيوبيا',
        emoji: '🇪🇹'
    },
    {
        code: 'EU',
        name: 'European Union',
        emoji: '🇪🇺'
    },
    {
        code: 'FI',
        name: 'Finland',
        name_ar: 'فنلندا',
        emoji: '🇫🇮'
    },
    {
        code: 'FJ',
        name: 'Fiji',
        name_ar: 'فيجي',
        emoji: '🇫🇯'
    },
    {
        code: 'FK',
        name: 'Falkland Islands',
        name_ar: 'جزر فوكلاند',
        emoji: '🇫🇰'
    },
    {
        code: 'FM',
        name: 'Micronesia',
        name_ar: 'ميكرونيزيا',
        emoji: '🇫🇲'
    },
    {
        code: 'FO',
        name: 'Faroe Islands',
        name_ar: 'جزر فارو',
        emoji: '🇫🇴'
    },
    {
        code: 'FR',
        name: 'France',
        name_ar: 'فرنسا',
        emoji: '🇫🇷'
    },
    {
        code: 'GA',
        name: 'Gabon',
        name_ar: 'الجابون',
        emoji: '🇬🇦'
    },
    {
        code: 'GB',
        name: 'United Kingdom',
        name_ar: 'المملكة المتحدة',
        emoji: '🇬🇧'
    },
    {
        code: 'GD',
        name: 'Grenada',
        name_ar: 'جرينادا',
        emoji: '🇬🇩'
    },
    {
        code: 'GE',
        name: 'Georgia',
        name_ar: 'جورجيا',
        emoji: '🇬🇪'
    },
    {
        code: 'GF',
        name: 'French Guiana',
        name_ar: 'غويانا',
        emoji: '🇬🇫'
    },
    {
        code: 'GG',
        name: 'Guernsey',
        emoji: '🇬🇬'
    },
    {
        code: 'GH',
        name: 'Ghana',
        name_ar: 'غانا',
        emoji: '🇬🇭'
    },
    {
        code: 'GI',
        name: 'Gibraltar',
        name_ar: 'جبل طارق',
        emoji: '🇬🇮'
    },
    {
        code: 'GL',
        name: 'Greenland',
        name_ar: 'جرينلاند',
        emoji: '🇬🇱'
    },
    {
        code: 'GM',
        name: 'Gambia',
        name_ar: 'غامبيا',
        emoji: '🇬🇲'
    },
    {
        code: 'GN',
        name: 'Guinea',
        name_ar: 'غينيا',
        emoji: '🇬🇳'
    },
    {
        code: 'GP',
        name: 'Guadeloupe',
        name_ar: 'جوادلوب',
        emoji: '🇬🇵'
    },
    {
        code: 'GQ',
        name: 'Equatorial Guinea',
        name_ar: 'غينيا الاستوائية',
        emoji: '🇬🇶'
    },
    {
        code: 'GR',
        name: 'Greece',
        name_ar: 'اليونان',
        emoji: '🇬🇷'
    },
    {
        code: 'GS',
        name: 'South Georgia & South Sandwich Islands',
        name_ar: 'جورجيا الجنوبية وجزر ساندويتش الجنوبية',
        emoji: '🇬🇸'
    },
    {
        code: 'GT',
        name: 'Guatemala',
        name_ar: 'جواتيمالا',
        emoji: '🇬🇹'
    },
    {
        code: 'GU',
        name: 'Guam',
        name_ar: 'جوام',
        emoji: '🇬🇺'
    },
    {
        code: 'GW',
        name: 'Guinea-Bissau',
        name_ar: 'غينيا بيساو',
        emoji: '🇬🇼'
    },
    {
        code: 'GY',
        name: 'Guyana',
        name_ar: 'غيانا',
        emoji: '🇬🇾'
    },
    {
        code: 'HK',
        name: 'Hong Kong SAR China',
        name_ar: 'هونج كونج الصينية',
        emoji: '🇭🇰'
    },
    {
        code: 'HM',
        name: 'Heard & McDonald Islands',
        name_ar: 'جزيرة هيرد وماكدونالد',
        emoji: '🇭🇲'
    },
    {
        code: 'HN',
        name: 'Honduras',
        name_ar: 'هندوراس',
        emoji: '🇭🇳'
    },
    {
        code: 'HR',
        name: 'Croatia',
        name_ar: 'كرواتيا',
        emoji: '🇭🇷'
    },
    {
        code: 'HT',
        name: 'Haiti',
        name_ar: 'هايتي',
        emoji: '🇭🇹'
    },
    {
        code: 'HU',
        name: 'Hungary',
        name_ar: 'المجر',
        emoji: '🇭🇺'
    },
    {
        code: 'IC',
        name: 'Canary Islands',
        emoji: '🇮🇨'
    },
    {
        code: 'ID',
        name: 'Indonesia',
        name_ar: 'اندونيسيا',
        emoji: '🇮🇩'
    },
    {
        code: 'IE',
        name: 'Ireland',
        name_ar: 'أيرلندا',
        emoji: '🇮🇪'
    },
    {
        code: 'IL',
        name: 'Israel',
        name_ar: 'اسرائيل',
        emoji: '🇮🇱'
    },
    {
        code: 'IM',
        name: 'Isle of Man',
        name_ar: 'جزيرة مان',
        emoji: '🇮🇲'
    },
    {
        code: 'IN',
        name: 'India',
        name_ar: 'الهند',
        emoji: '🇮🇳'
    },
    {
        code: 'IO',
        name: 'British Indian Ocean Territory',
        name_ar: 'المحيط الهندي البريطاني',
        emoji: '🇮🇴'
    },
    {
        code: 'IQ',
        name: 'Iraq',
        name_ar: 'العراق',
        emoji: '🇮🇶'
    },
    {
        code: 'IR',
        name: 'Iran',
        name_ar: 'ايران',
        emoji: '🇮🇷'
    },
    {
        code: 'IS',
        name: 'Iceland',
        name_ar: 'أيسلندا',
        emoji: '🇮🇸'
    },
    {
        code: 'IT',
        name: 'Italy',
        name_ar: 'ايطاليا',
        emoji: '🇮🇹'
    },
    {
        code: 'JE',
        name: 'Jersey',
        name_ar: 'جيرسي',
        emoji: '🇯🇪'
    },
    {
        code: 'JM',
        name: 'Jamaica',
        name_ar: 'جامايكا',
        emoji: '🇯🇲'
    },
    {
        code: 'JO',
        name: 'Jordan',
        name_ar: 'الأردن',
        emoji: '🇯🇴'
    },
    {
        code: 'JP',
        name: 'Japan',
        name_ar: 'اليابان',
        emoji: '🇯🇵'
    },
    {
        code: 'KE',
        name: 'Kenya',
        name_ar: 'كينيا',
        emoji: '🇰🇪'
    },
    {
        code: 'KG',
        name: 'Kyrgyzstan',
        name_ar: 'قرغيزستان',
        emoji: '🇰🇬'
    },
    {
        code: 'KH',
        name: 'Cambodia',
        name_ar: 'كمبوديا',
        emoji: '🇰🇭'
    },
    {
        code: 'KI',
        name: 'Kiribati',
        name_ar: 'كيريباتي',
        emoji: '🇰🇮'
    },
    {
        code: 'KM',
        name: 'Comoros',
        name_ar: 'جزر القمر',
        emoji: '🇰🇲'
    },
    {
        code: 'KN',
        name: 'St. Kitts & Nevis',
        name_ar: 'سانت كيتس ونيفيس',
        emoji: '🇰🇳'
    },
    {
        code: 'KP',
        name: 'North Korea',
        name_ar: 'كوريا الشمالية',
        emoji: '🇰🇵'
    },
    {
        code: 'KR',
        name: 'South Korea',
        name_ar: 'كوريا الجنوبية',
        emoji: '🇰🇷'
    },
    {
        code: 'KW',
        name: 'Kuwait',
        name_ar: 'الكويت',
        emoji: '🇰🇼'
    },
    {
        code: 'KY',
        name: 'Cayman Islands',
        name_ar: 'جزر الكايمن',
        emoji: '🇰🇾'
    },
    {
        code: 'KZ',
        name: 'Kazakhstan',
        name_ar: 'كازاخستان',
        emoji: '🇰🇿'
    },
    {
        code: 'LA',
        name: 'Laos',
        name_ar: 'لاوس',
        emoji: '🇱🇦'
    },
    {
        code: 'LB',
        name: 'Lebanon',
        name_ar: 'لبنان',
        emoji: '🇱🇧'
    },
    {
        code: 'LC',
        name: 'St. Lucia',
        name_ar: 'سانت لوسيا',
        emoji: '🇱🇨'
    },
    {
        code: 'LI',
        name: 'Liechtenstein',
        name_ar: 'ليختنشتاين',
        emoji: '🇱🇮'
    },
    {
        code: 'LK',
        name: 'Sri Lanka',
        name_ar: 'سريلانكا',
        emoji: '🇱🇰'
    },
    {
        code: 'LR',
        name: 'Liberia',
        name_ar: 'ليبيريا',
        emoji: '🇱🇷'
    },
    {
        code: 'LS',
        name: 'Lesotho',
        name_ar: 'ليسوتو',
        emoji: '🇱🇸'
    },
    {
        code: 'LT',
        name: 'Lithuania',
        name_ar: 'ليتوانيا',
        emoji: '🇱🇹'
    },
    {
        code: 'LU',
        name: 'Luxembourg',
        name_ar: 'لوكسمبورج',
        emoji: '🇱🇺'
    },
    {
        code: 'LV',
        name: 'Latvia',
        name_ar: 'لاتفيا',
        emoji: '🇱🇻'
    },
    {
        code: 'LY',
        name: 'Libya',
        name_ar: 'ليبيا',
        emoji: '🇱🇾'
    },
    {
        code: 'MA',
        name: 'Morocco',
        name_ar: 'المغرب',
        emoji: '🇲🇦'
    },
    {
        code: 'MC',
        name: 'Monaco',
        name_ar: 'موناكو',
        emoji: '🇲🇨'
    },
    {
        code: 'MD',
        name: 'Moldova',
        name_ar: 'مولدافيا',
        emoji: '🇲🇩'
    },
    {
        code: 'ME',
        name: 'Montenegro',
        name_ar: 'الجبل الأسود',
        emoji: '🇲🇪'
    },
    {
        code: 'MF',
        name: 'St. Martin',
        name_ar: 'سانت مارتين',
        emoji: '🇲🇫'
    },
    {
        code: 'MG',
        name: 'Madagascar',
        name_ar: 'مدغشقر',
        emoji: '🇲🇬'
    },
    {
        code: 'MH',
        name: 'Marshall Islands',
        name_ar: 'جزر المارشال',
        emoji: '🇲🇭'
    },
    {
        code: 'MK',
        name: 'Macedonia',
        name_ar: 'مقدونيا',
        emoji: '🇲🇰'
    },
    {
        code: 'ML',
        name: 'Mali',
        name_ar: 'مالي',
        emoji: '🇲🇱'
    },
    {
        code: 'MM',
        name: 'Myanmar (Burma)',
        name_ar: 'ميانمار',
        emoji: '🇲🇲'
    },
    {
        code: 'MN',
        name: 'Mongolia',
        name_ar: 'منغوليا',
        emoji: '🇲🇳'
    },
    {
        code: 'MO',
        name: 'Macau SAR China',
        name_ar: 'ماكاو الصينية',
        emoji: '🇲🇴'
    },
    {
        code: 'MP',
        name: 'Northern Mariana Islands',
        name_ar: 'جزر ماريانا الشمالية',
        emoji: '🇲🇵'
    },
    {
        code: 'MQ',
        name: 'Martinique',
        name_ar: 'مارتينيك',
        emoji: '🇲🇶'
    },
    {
        code: 'MR',
        name: 'Mauritania',
        name_ar: 'موريتانيا',
        emoji: '🇲🇷'
    },
    {
        code: 'MS',
        name: 'Montserrat',
        name_ar: 'مونتسرات',
        emoji: '🇲🇸'
    },
    {
        code: 'MT',
        name: 'Malta',
        name_ar: 'مالطا',
        emoji: '🇲🇹'
    },
    {
        code: 'MU',
        name: 'Mauritius',
        name_ar: 'موريشيوس',
        emoji: '🇲🇺'
    },
    {
        code: 'MV',
        name: 'Maldives',
        name_ar: 'جزر الملديف',
        emoji: '🇲🇻'
    },
    {
        code: 'MW',
        name: 'Malawi',
        name_ar: 'ملاوي',
        emoji: '🇲🇼'
    },
    {
        code: 'MX',
        name: 'Mexico',
        name_ar: 'المكسيك',
        emoji: '🇲🇽'
    },
    {
        code: 'MY',
        name: 'Malaysia',
        name_ar: 'ماليزيا',
        emoji: '🇲🇾'
    },
    {
        code: 'MZ',
        name: 'Mozambique',
        name_ar: 'موزمبيق',
        emoji: '🇲🇿'
    },
    {
        code: 'NA',
        name: 'Namibia',
        name_ar: 'ناميبيا',
        emoji: '🇳🇦'
    },
    {
        code: 'NC',
        name: 'New Caledonia',
        name_ar: 'كاليدونيا الجديدة',
        emoji: '🇳🇨'
    },
    {
        code: 'NE',
        name: 'Niger',
        name_ar: 'النيجر',
        emoji: '🇳🇪'
    },
    {
        code: 'NF',
        name: 'Norfolk Island',
        name_ar: 'جزيرة نورفوك',
        emoji: '🇳🇫'
    },
    {
        code: 'NG',
        name: 'Nigeria',
        name_ar: 'نيجيريا',
        emoji: '🇳🇬'
    },
    {
        code: 'NI',
        name: 'Nicaragua',
        name_ar: 'نيكاراجوا',
        emoji: '🇳🇮'
    },
    {
        code: 'NL',
        name: 'Netherlands',
        name_ar: 'هولندا',
        emoji: '🇳🇱'
    },
    {
        code: 'NO',
        name: 'Norway',
        name_ar: 'النرويج',
        emoji: '🇳🇴'
    },
    {
        code: 'NP',
        name: 'Nepal',
        name_ar: 'نيبال',
        emoji: '🇳🇵'
    },
    {
        code: 'NR',
        name: 'Nauru',
        name_ar: 'نورو',
        emoji: '🇳🇷'
    },
    {
        code: 'NU',
        name: 'Niue',
        name_ar: 'نيوي',
        emoji: '🇳🇺'
    },
    {
        code: 'NZ',
        name: 'New Zealand',
        name_ar: 'نيوزيلاندا',
        emoji: '🇳🇿'
    },
    {
        code: 'OM',
        name: 'Oman',
        name_ar: 'عمان',
        emoji: '🇴🇲'
    },
    {
        code: 'PA',
        name: 'Panama',
        name_ar: 'بنما',
        emoji: '🇵🇦'
    },
    {
        code: 'PE',
        name: 'Peru',
        name_ar: 'بيرو',
        emoji: '🇵🇪'
    },
    {
        code: 'PF',
        name: 'French Polynesia',
        name_ar: 'بولينيزيا الفرنسية',
        emoji: '🇵🇫'
    },
    {
        code: 'PG',
        name: 'Papua New Guinea',
        name_ar: 'بابوا غينيا الجديدة',
        emoji: '🇵🇬'
    },
    {
        code: 'PH',
        name: 'Philippines',
        name_ar: 'الفيلبين',
        emoji: '🇵🇭'
    },
    {
        code: 'PK',
        name: 'Pakistan',
        name_ar: 'باكستان',
        emoji: '🇵🇰'
    },
    {
        code: 'PL',
        name: 'Poland',
        name_ar: 'بولندا',
        emoji: '🇵🇱'
    },
    {
        code: 'PM',
        name: 'St. Pierre & Miquelon',
        name_ar: 'سانت بيير وميكولون',
        emoji: '🇵🇲'
    },
    {
        code: 'PN',
        name: 'Pitcairn Islands',
        name_ar: 'بتكايرن',
        emoji: '🇵🇳'
    },
    {
        code: 'PR',
        name: 'Puerto Rico',
        name_ar: 'بورتوريكو',
        emoji: '🇵🇷'
    },
    {
        code: 'PS',
        name: 'Palestinian Territories',
        name_ar: 'فلسطين',
        emoji: '🇵🇸'
    },
    {
        code: 'PT',
        name: 'Portugal',
        name_ar: 'البرتغال',
        emoji: '🇵🇹'
    },
    {
        code: 'PW',
        name: 'Palau',
        name_ar: 'بالاو',
        emoji: '🇵🇼'
    },
    {
        code: 'PY',
        name: 'Paraguay',
        name_ar: 'باراجواي',
        emoji: '🇵🇾'
    },
    {
        code: 'QA',
        name: 'Qatar',
        name_ar: 'قطر',
        emoji: '🇶🇦'
    },
    {
        code: 'RE',
        name: 'Réunion',
        name_ar: 'روينيون',
        emoji: '🇷🇪'
    },
    {
        code: 'RO',
        name: 'Romania',
        name_ar: 'رومانيا',
        emoji: '🇷🇴'
    },
    {
        code: 'RS',
        name: 'Serbia',
        name_ar: 'صربيا',
        emoji: '🇷🇸'
    },
    {
        code: 'RU',
        name: 'Russia',
        name_ar: 'روسيا',
        emoji: '🇷🇺'
    },
    {
        code: 'RW',
        name: 'Rwanda',
        name_ar: 'رواندا',
        emoji: '🇷🇼'
    },
    {
        code: 'SA',
        name: 'Saudi Arabia',
        name_ar: 'المملكة العربية السعودية',
        emoji: '🇸🇦'
    },
    {
        code: 'SB',
        name: 'Solomon Islands',
        name_ar: 'جزر سليمان',
        emoji: '🇸🇧'
    },
    {
        code: 'SC',
        name: 'Seychelles',
        name_ar: 'سيشل',
        emoji: '🇸🇨'
    },
    {
        code: 'SD',
        name: 'Sudan',
        name_ar: 'السودان',
        emoji: '🇸🇩'
    },
    {
        code: 'SE',
        name: 'Sweden',
        name_ar: 'السويد',
        emoji: '🇸🇪'
    },
    {
        code: 'SG',
        name: 'Singapore',
        name_ar: 'سنغافورة',
        emoji: '🇸🇬'
    },
    {
        code: 'SH',
        name: 'St. Helena',
        name_ar: 'سانت هيلنا',
        emoji: '🇸🇭'
    },
    {
        code: 'SI',
        name: 'Slovenia',
        name_ar: 'سلوفينيا',
        emoji: '🇸🇮'
    },
    {
        code: 'SJ',
        name: 'Svalbard & Jan Mayen',
        name_ar: 'سفالبارد وجان مايان',
        emoji: '🇸🇯'
    },
    {
        code: 'SK',
        name: 'Slovakia',
        name_ar: 'سلوفاكيا',
        emoji: '🇸🇰'
    },
    {
        code: 'SL',
        name: 'Sierra Leone',
        name_ar: 'سيراليون',
        emoji: '🇸🇱'
    },
    {
        code: 'SM',
        name: 'San Marino',
        name_ar: 'سان مارينو',
        emoji: '🇸🇲'
    },
    {
        code: 'SN',
        name: 'Senegal',
        name_ar: 'السنغال',
        emoji: '🇸🇳'
    },
    {
        code: 'SO',
        name: 'Somalia',
        name_ar: 'الصومال',
        emoji: '🇸🇴'
    },
    {
        code: 'SR',
        name: 'Suriname',
        name_ar: 'سورينام',
        emoji: '🇸🇷'
    },
    {
        code: 'SS',
        name: 'South Sudan',
        emoji: '🇸🇸'
    },
    {
        code: 'ST',
        name: 'São Tomé & Príncipe',
        name_ar: 'ساو تومي وبرينسيبي',
        emoji: '🇸🇹'
    },
    {
        code: 'SV',
        name: 'El Salvador',
        name_ar: 'السلفادور',
        emoji: '🇸🇻'
    },
    {
        code: 'SX',
        name: 'Sint Maarten',
        emoji: '🇸🇽'
    },
    {
        code: 'SY',
        name: 'Syria',
        name_ar: 'سوريا',
        emoji: '🇸🇾'
    },
    {
        code: 'SZ',
        name: 'Swaziland',
        name_ar: 'سوازيلاند',
        emoji: '🇸🇿'
    },
    {
        code: 'TA',
        name: 'Tristan da Cunha',
        emoji: '🇹🇦'
    },
    {
        code: 'TC',
        name: 'Turks & Caicos Islands',
        name_ar: 'جزر الترك وجايكوس',
        emoji: '🇹🇨'
    },
    {
        code: 'TD',
        name: 'Chad',
        name_ar: 'تشاد',
        emoji: '🇹🇩'
    },
    {
        code: 'TF',
        name: 'French Southern Territories',
        name_ar: 'المقاطعات الجنوبية الفرنسية',
        emoji: '🇹🇫'
    },
    {
        code: 'TG',
        name: 'Togo',
        name_ar: 'توجو',
        emoji: '🇹🇬'
    },
    {
        code: 'TH',
        name: 'Thailand',
        name_ar: 'تايلند',
        emoji: '🇹🇭'
    },
    {
        code: 'TJ',
        name: 'Tajikistan',
        name_ar: 'طاجكستان',
        emoji: '🇹🇯'
    },
    {
        code: 'TK',
        name: 'Tokelau',
        name_ar: 'توكيلو',
        emoji: '🇹🇰'
    },
    {
        code: 'TL',
        name: 'Timor-Leste',
        name_ar: 'تيمور الشرقية',
        emoji: '🇹🇱'
    },
    {
        code: 'TM',
        name: 'Turkmenistan',
        name_ar: 'تركمانستان',
        emoji: '🇹🇲'
    },
    {
        code: 'TN',
        name: 'Tunisia',
        name_ar: 'تونس',
        emoji: '🇹🇳'
    },
    {
        code: 'TO',
        name: 'Tonga',
        name_ar: 'تونجا',
        emoji: '🇹🇴'
    },
    {
        code: 'TR',
        name: 'Turkey',
        name_ar: 'تركيا',
        emoji: '🇹🇷'
    },
    {
        code: 'TT',
        name: 'Trinidad & Tobago',
        name_ar: 'ترينيداد وتوباغو',
        emoji: '🇹🇹'
    },
    {
        code: 'TV',
        name: 'Tuvalu',
        name_ar: 'توفالو',
        emoji: '🇹🇻'
    },
    {
        code: 'TW',
        name: 'Taiwan',
        name_ar: 'تايوان',
        emoji: '🇹🇼'
    },
    {
        code: 'TZ',
        name: 'Tanzania',
        name_ar: 'تانزانيا',
        emoji: '🇹🇿'
    },
    {
        code: 'UA',
        name: 'Ukraine',
        name_ar: 'أوكرانيا',
        emoji: '🇺🇦'
    },
    {
        code: 'UG',
        name: 'Uganda',
        name_ar: 'أوغندا',
        emoji: '🇺🇬'
    },
    {
        code: 'UM',
        name: 'U.S. Outlying Islands',
        name_ar: 'جزر الولايات المتحدة البعيدة الصغيرة',
        emoji: '🇺🇲'
    },
    {
        code: 'UN',
        name: 'United Nations',
        emoji: '🇺🇳'
    },
    {
        code: 'US',
        name: 'United States',
        name_ar: 'الولايات المتحدة الأمريكية',
        emoji: '🇺🇸'
    },
    {
        code: 'UY',
        name: 'Uruguay',
        name_ar: 'أورجواي',
        emoji: '🇺🇾'
    },
    {
        code: 'UZ',
        name: 'Uzbekistan',
        name_ar: 'أوزبكستان',
        emoji: '🇺🇿'
    },
    {
        code: 'VA',
        name: 'Vatican City',
        name_ar: 'الفاتيكان',
        emoji: '🇻🇦'
    },
    {
        code: 'VC',
        name: 'St. Vincent & Grenadines',
        name_ar: 'سانت فنسنت وغرنادين',
        emoji: '🇻🇨'
    },
    {
        code: 'VE',
        name: 'Venezuela',
        name_ar: 'فنزويلا',
        emoji: '🇻🇪'
    },
    {
        code: 'VG',
        name: 'British Virgin Islands',
        name_ar: 'جزر فرجين البريطانية',
        emoji: '🇻🇬'
    },
    {
        code: 'VI',
        name: 'U.S. Virgin Islands',
        name_ar: 'جزر فرجين الأمريكية',
        emoji: '🇻🇮'
    },
    {
        code: 'VN',
        name: 'Vietnam',
        name_ar: 'فيتنام',
        emoji: '🇻🇳'
    },
    {
        code: 'VU',
        name: 'Vanuatu',
        name_ar: 'فانواتو',
        emoji: '🇻🇺'
    },
    {
        code: 'WF',
        name: 'Wallis & Futuna',
        name_ar: 'جزر والس وفوتونا',
        emoji: '🇼🇫'
    },
    {
        code: 'WS',
        name: 'Samoa',
        name_ar: 'ساموا',
        emoji: '🇼🇸'
    },
    {
        code: 'XK',
        name: 'Kosovo',
        emoji: '🇽🇰'
    },
    {
        code: 'YE',
        name: 'Yemen',
        name_ar: 'اليمن',
        emoji: '🇾🇪'
    },
    {
        code: 'YT',
        name: 'Mayotte',
        name_ar: 'مايوت',
        emoji: '🇾🇹'
    },
    {
        code: 'ZA',
        name: 'South Africa',
        name_ar: 'جمهورية جنوب افريقيا',
        emoji: '🇿🇦'
    },
    {
        code: 'ZM',
        name: 'Zambia',
        name_ar: 'زامبيا',
        emoji: '🇿🇲'
    },
    {
        code: 'ZW',
        name: 'Zimbabwe',
        name_ar: 'زيمبابوي',
        emoji: '🇿🇼'
    }
]

export default countries;