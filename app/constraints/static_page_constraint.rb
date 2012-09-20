class StaticPageConstraint
  STATIC_PAGES = %w(about projects events hackers sponsors partners contact home newbie1 newbie2 newbie3)


  def self.matches?(request)
    STATIC_PAGES.include?(request.path_parameters[:action])
  end
end
