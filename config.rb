require 'slim'

set :js_dir,     'assets/javascripts'
set :css_dir,    'assets/stylesheets'
set :images_dir, 'assets/images'

activate :autoprefixer, browsers: ['last 2 versions', 'ie 8', 'ie 9']
activate :livereload

activate :google_analytics do |ga|
  ga.tracking_id = data.settings.google_analytics.tracking_code
  ga.anonymize_ip = true
  ga.debug = false
  ga.development = false
  ga.minify = true
end

activate :gzip
activate :livereload
activate :autoprefixer,
  browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ie 10']

page "/sitemap.xml", layout: false

# Add bower's directory to sprockets asset path
after_configuration do
  @bower_config = JSON.parse(IO.read("#{root}/.bowerrc"))
  sprockets.append_path File.join "#{root}", @bower_config["directory"]
end

configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :favicon_maker

  activate :sitemap, :hostname => data.settings.site.url

  # Use this for gh-pages
  activate :relative_assets
  set :relative_links, true
end
