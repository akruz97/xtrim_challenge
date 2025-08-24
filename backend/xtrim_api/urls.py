from django.urls import path
from .views import UserConsumptionView, UserView, UserPlanView


urlpatterns = [
    path('consumption/<int:user_id>', UserConsumptionView.as_view(), name='user-consumption'),
    path('user/<int:user_id>', UserView.as_view(), name='user-detail'),
    path('user/plan/<int:user_id>', UserPlanView.as_view(), name='user-plan'),
]