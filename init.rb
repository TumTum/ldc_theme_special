Redmine::Plugin.register :ldc_theme_special do
  name 'LDC Theme Special '
  author 'Tobias Matthaiou'
  description 'Es verändert einwenig die HTML Struktur. z.b. Fügt es die Apple Icons hinzu'
  version '0.0.2'
  url 'https://github.com/TumTum/ldc_theme_special'
  author_url 'http://www.tobimat.eu'
end

require_dependency 'ldc_apple_icons'
require_dependency 'ldc_Issues'
