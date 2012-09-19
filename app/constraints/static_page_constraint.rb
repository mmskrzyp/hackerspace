class StaticPageConstraint
  STATIC_PAGES = %w(about contact events home sponsors partners newbie1 newbie2 newbie3)


  def self.matches?(request)
    STATIC_PAGES.include?(request.path_parameters[:action])
  end
end
