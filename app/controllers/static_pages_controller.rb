class StaticPagesController < ApplicationController
  def home
  end

  def contact
  end

  def about
  end

  def sponsors
    @sponsors = Partner.where(sponsor: true)
  end

  def partners
    @partners = Partner.where(sponsor: false)
  end

  def events
  end

  def newbie1
  end

  def newbie2
  end

  def newbie3
  end

end
