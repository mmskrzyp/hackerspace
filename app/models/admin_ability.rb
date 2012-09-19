class AdminAbility
  include CanCan::Ability

  def initialize(user)
    if user && user.admin?
      # What I am saying here is - Admin is allmighty!
      can :access, :rails_admin
      can :manage, :all
    end
  end
end

