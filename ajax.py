from dajax.core import Dajax
from dajaxice.decorators import dajaxice_register

@dajaxice_register
def clear(request):
    dajax = Dajax()
    dajax.clear('#menu', 'innerHTML')
    return dajax.json()